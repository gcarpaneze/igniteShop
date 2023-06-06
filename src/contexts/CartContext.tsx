import { createContext, useState, useEffect, ReactNode } from 'react'

interface ProviderProps {
  children: ReactNode
}

interface ProductsDetails {
  id: string
  name: string
  imgURL: string
  description: string
  price: number
  defaultPriceId: string
}

interface ContextProps {
  cartProducts: ProductsDetails[]
  addProductInCart: (product: ProductsDetails) => void
  removeProduct: (id: string) => void
}

export const CartContext = createContext({} as ContextProps)

export function CartProvider({ children }: ProviderProps) {
  const [cartProducts, setCartProducts] = useState<ProductsDetails[]>([])

  useEffect(() => {
    const response = localStorage.getItem('@ignite-shop-cart-v.1')
    const data = response ? JSON.parse(response) : []
    setCartProducts(data)
  }, [])

  function addProductInCart(product: ProductsDetails) {
    const hasAdded = cartProducts.filter(
      (cartProduct) => cartProduct.id === product.id,
    )

    if (hasAdded.length === 0) {
      const newCartProducts = cartProducts
      newCartProducts.push(product)
      setCartProducts(newCartProducts)
      localStorage.setItem(
        '@ignite-shop-cart-v.1',
        JSON.stringify(newCartProducts),
      )
    }
  }

  function removeProduct(id: string) {
    const data = cartProducts.filter(
      (product: ProductsDetails) => product.id !== id,
    )
    setCartProducts(data)
    localStorage.setItem('@ignite-shop-cart-v.1', JSON.stringify(data))
  }

  return (
    <CartContext.Provider
      value={{ cartProducts, addProductInCart, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  )
}
