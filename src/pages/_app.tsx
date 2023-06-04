import * as Dialog from '@radix-ui/react-dialog'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { Handbag } from '@phosphor-icons/react'

import { globalStyles } from '../styles/globalStyles'

import { Container, Header, ButtonCart } from '../styles/pages/app'

import LogoImg from '../assets/Logo.svg'
import { useState } from 'react'
import { Modal } from '../components/Modal'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <Dialog.Root open={open} onOpenChange={() => setOpen(!open)}>
        <Header>
          <Image src={LogoImg} alt="" />
          <div>
            <ButtonCart>
              <Handbag />
            </ButtonCart>
            <span>1</span>
          </div>
        </Header>

        <Dialog.Portal>
          <Modal />
        </Dialog.Portal>
      </Dialog.Root>

      <Component {...pageProps} />
    </Container>
  )
}
