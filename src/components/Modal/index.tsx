import { useContext } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { useKeenSlider } from 'keen-slider/react'
import { X } from '@phosphor-icons/react'

import { CartContext } from '../../contexts/CartContext'

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

export function Modal() {
  const [keenSliderRef] = useKeenSlider({
    vertical: true,
    slides: {
      perView: 4,
      spacing: 1,
    },
  })

  const { cartProducts, removeProduct } = useContext(CartContext)

  async function handleBuyProduct() {
    if (cartProducts.length === 0) return

    const pricesIds = cartProducts.map((product) => {
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

  const totalAmount = cartProducts.reduce((acc, cur) => acc + cur.price, 0)

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
          {cartProducts.map((product) => {
            return (
              <Item key={product.id} className="keen-slider__slide">
                <ImageContainer>
                  <Image src={product.imgURL} alt="" width={90} height={90} />
                </ImageContainer>

                <div>
                  <p>{product.name}</p>
                  <strong>{converter(product.price)}</strong>

                  <button onClick={() => removeProduct(product.id)}>
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
            <span>{cartProducts.length} itens</span>
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
