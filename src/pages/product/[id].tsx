import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'
import axios from 'axios'

import { stripe } from '../../lib/stripe'

import {
  DetailsContainer,
  ImageContainer,
  ProductContainer,
} from '../../styles/pages/product'
import { useState } from 'react'
import Head from 'next/head'

interface ProductProps {
  product: {
    id: string
    name: string
    imgURL: string
    description: string
    price: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isLoading, setIsLoading] = useState(false)

  async function handleBuyProduct() {
    try {
      setIsLoading(true)
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutURL } = response.data

      window.location.href = checkoutURL
    } catch (error) {
      setIsLoading(false)
      alert('Falha ao redirecionar para o checkout!')
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
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button onClick={handleBuyProduct} disabled={isLoading}>
            Comprar agora
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
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
