import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { Stripe } from 'stripe'

import { HomeContainer, Product } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'

import { stripe } from '../lib/stripe'

interface HomeProps {
  products: {
    id: string
    name: string
    imgURL: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [keenSliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={keenSliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image src={product.imgURL} width={520} height={480} alt="" />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price / 100}</span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imgURL: product.images[0],
      price: price.unit_amount,
    }
  })

  return {
    props: {
      products,
    },
  }
}
