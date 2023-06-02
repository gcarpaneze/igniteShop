import type { AppProps } from 'next/app'
import Image from 'next/image'
import { globalStyles } from '../styles/globalStyles'

import { Container, Header } from '../styles/pages/app'

import LogoImg from '../assets/Logo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={LogoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
