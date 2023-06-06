import { useState } from 'react'
import type { AppProps } from 'next/app'
import * as Dialog from '@radix-ui/react-dialog'

import { CartProvider } from '../contexts/CartContext'

import { globalStyles } from '../styles/globalStyles'

import { Container } from '../styles/pages/app'

import { Modal } from '../components/Modal'
import { Header } from '../components/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false)

  return (
    <CartProvider>
      <Container open={open} onOpenChange={() => setOpen(!open)}>
        <Header />

        <Component {...pageProps} />

        <Dialog.Portal>
          <Modal />
        </Dialog.Portal>
      </Container>
    </CartProvider>
  )
}
