import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Stripe from 'stripe'
// import axios from 'axios'

import { stripe } from '../../lib/stripe'

import {
  DetailsContainer,
  ImageContainer,
  ProductContainer,
} from '../../styles/pages/product'

import { converter } from '../../utils/converter'

interface ProductProps {
  product: {
    id: string
    name: string
    imgURL: string
    description: string
    price: number
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  function handleSetCartProduct() {
    const response = localStorage.getItem('@ignite-shop-cart-v.1')
    const productsInCart = response ? JSON.parse(response) : []

    const hasAdded = productsInCart.filter(
      (cartProduct) => cartProduct.id === product.id,
    )

    if (hasAdded.length === 0) {
      productsInCart.push(product)
      localStorage.setItem(
        '@ignite-shop-cart-v.1',
        JSON.stringify(productsInCart),
      )
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imgURL} width={520} height={480} alt="" />
        </ImageContainer>

        <DetailsContainer>
          <h1>{product.name}</h1>
          <span>{converter(product.price)}</span>

          <p>{product.description}</p>

          <button onClick={() => handleSetCartProduct()}>
            Colocar na sacola
          </button>
        </DetailsContainer>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params.id as string

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imgURL: product.images[0],
        description: product.description,
        defaultPriceId: price.id,
        price: price.unit_amount / 100,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
