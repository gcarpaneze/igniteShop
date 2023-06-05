import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { Handbag } from '@phosphor-icons/react'

import { globalStyles } from '../styles/globalStyles'

import { Container, Header, ButtonCart } from '../styles/pages/app'

import LogoImg from '../assets/Logo.svg'
import { Modal } from '../components/Modal'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false)
  const [countItemsInCart, setCountItensInCart] = useState<number>(0)

  useEffect(() => {
    const response = localStorage.getItem('@ignite-shop-cart-v.1')
    const data = response ? JSON.parse(response) : []

    setCountItensInCart(data.length)
  }, [])

  return (
    <Container open={open} onOpenChange={() => setOpen(!open)}>
      <Header>
        <Link href="/">
          <Image src={LogoImg} alt="" />
        </Link>
        <div>
          <ButtonCart>
            <Handbag />
          </ButtonCart>
          <span>{countItemsInCart}</span>
        </div>
      </Header>

      <Component {...pageProps} />

      <Dialog.Portal>
        <Modal />
      </Dialog.Portal>
    </Container>
  )
}
