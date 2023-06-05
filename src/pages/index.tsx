import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { Stripe } from 'stripe'
import { useKeenSlider } from 'keen-slider/react'
import { Handbag } from '@phosphor-icons/react'

import { stripe } from '../lib/stripe'

import { HomeContainer, Product } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { converter } from '../utils/converter'

interface HomeProps {
  products: {
    id: string
    name: string
    imgURL: string
    price: number
  }[]
  handleSetCartProducts: () => void
}

export default function Home({ products, handleSetCartProducts }: HomeProps) {
  const [keenSliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={keenSliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imgURL} width={520} height={480} alt="" />

                <footer>
                  <div>
                    <p>{product.name}</p>
                    <strong>{converter(product.price)}</strong>
                  </div>

                  <Handbag />
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imgURL: product.images[0],
      price: price.unit_amount / 100,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
