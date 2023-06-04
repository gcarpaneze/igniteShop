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

export function Modal() {
  const [keenSliderRef] = useKeenSlider({
    vertical: true,
    slides: {
      perView: 4,
    },
  })

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
          style={{ flexWrap: 'nowrap' }}
        >
          <Item className="keen-slider__slide">
            <ImageContainer></ImageContainer>

            <div>
              <p>Camiseta Beyond the Limits</p>
              <strong>R$ 79,90</strong>

              <div>
                <button>Remover</button>
              </div>
            </div>
          </Item>
          <Item className="keen-slider__slide">
            <ImageContainer></ImageContainer>

            <div>
              <p>Camiseta Beyond the Limits</p>
              <strong>R$ 79,90</strong>

              <div>
                <button>Remover</button>
              </div>
            </div>
          </Item>
          <Item className="keen-slider__slide">
            <ImageContainer></ImageContainer>

            <div>
              <p>Camiseta Beyond the Limits</p>
              <strong>R$ 79,90</strong>

              <div>
                <button>Remover</button>
              </div>
            </div>
          </Item>
          <Item className="keen-slider__slide">
            <ImageContainer></ImageContainer>

            <div>
              <p>Camiseta Beyond the Limits</p>
              <strong>R$ 79,90</strong>

              <div>
                <button>Remover</button>
              </div>
            </div>
          </Item>
          <Item className="keen-slider__slide">
            <ImageContainer></ImageContainer>

            <div>
              <p>Camiseta Beyond the Limits</p>
              <strong>R$ 79,90</strong>

              <div>
                <button>Remover</button>
              </div>
            </div>
          </Item>
        </ItensSection>

        <ResumeSection>
          <div>
            <span>Quantidade</span>
            <span>3 itens</span>
          </div>

          <div>
            <span>Valor Total</span>
            <strong>R$ 270,00</strong>
          </div>

          <button type="button" onClick={() => {}}>
            Finalizar compra
          </button>
        </ResumeSection>
      </ModalContent>
    </ModalContainer>
  )
}
