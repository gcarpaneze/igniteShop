import { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Handbag } from '@phosphor-icons/react'

import { CartContext } from '../../contexts/CartContext'

import LogoImg from '../../assets/Logo.svg'

import { HeaderContainer, ButtonCart } from './styles'

export function Header() {
  const { cartProducts } = useContext(CartContext)

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={LogoImg} alt="" />
      </Link>
      <div>
        <ButtonCart>
          <Handbag />
        </ButtonCart>
        {cartProducts.length > 0 && <span>{cartProducts.length}</span>}
      </div>
    </HeaderContainer>
  )
}
