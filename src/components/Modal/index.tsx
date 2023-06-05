import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { useKeenSlider } from 'keen-slider/react'
import { X } from '@phosphor-icons/react'

import 'keen-slider/keen-slider.min.css'

import {
  ModalContainer,
  ModalHeader,
  ModalContent,
  ImageContainer,
  ItensSection,
  Item,
  ResumeSection,
} from './styles'
import { converter } from '../../utils/converter'
import Image from 'next/image'
import axios from 'axios'

interface ProductsDetails {
  id: string
  name: string
  imgURL: string
  description: string
  price: number
  defaultPriceId: string
}

export function Modal() {
  const [keenSliderRef] = useKeenSlider({
    vertical: true,
    slides: {
      perView: 4,
      spacing: 1,
    },
  })

  const [products, setProducts] = useState<ProductsDetails[]>([])
  const [initialLoading, setinitialLoading] = useState(true)

  useEffect(() => {
    const response = localStorage.getItem('@ignite-shop-cart-v.1')
    const data = response ? JSON.parse(response) : []
    setProducts(data)
    setinitialLoading(false)
  }, [])

  function handleRemoveProduct(id: string) {
    const data = products.filter((product) => product.id !== id)
    setProducts(data)
    localStorage.setItem('@ignite-shop-cart-v.1', JSON.stringify(data))
  }

  async function handleBuyProduct() {
    if (products.length === 0) return

    const pricesIds = products.map((product) => {
      return { price: product.defaultPriceId }
    })

    try {
      const response = await axios.post('/api/checkout', {
        pricesIds,
      })

      const { checkoutURL } = response.data

      window.location.href = checkoutURL
    } catch (error) {
      alert('Falha ao redirecionar para o checkout!')
    }
  }

  const totalAmount = products.reduce((acc, cur) => acc + cur.price, 0)

  if (initialLoading) {
    return <></>
  }

  return (
    <ModalContainer>
      <ModalHeader>
        <Dialog.Close asChild>
          <X />
        </Dialog.Close>
      </ModalHeader>

      <ModalContent>
        <h1>Sacola de compras</h1>

        <ItensSection
          ref={keenSliderRef}
          className="keen-slider"
          style={{ flexWrap: 'nowrap', height: '60%' }}
        >
          {products.map((product) => {
            return (
              <Item key={product.id} className="keen-slider__slide">
                <ImageContainer>
                  <Image src={product.imgURL} alt="" width={90} height={90} />
                </ImageContainer>

                <div>
                  <p>{product.name}</p>
                  <strong>{converter(product.price)}</strong>

                  <button onClick={() => handleRemoveProduct(product.id)}>
                    Remover
                  </button>
                </div>
              </Item>
            )
          })}
        </ItensSection>

        <ResumeSection>
          <div>
            <span>Quantidade</span>
            <span>{products.length} itens</span>
          </div>

          <div>
            <span>Valor Total</span>
            <strong>{converter(totalAmount)}</strong>
          </div>

          <button type="button" onClick={handleBuyProduct}>
            Finalizar compra
          </button>
        </ResumeSection>
      </ModalContent>
    </ModalContainer>
  )
}
