"use client"
import { createContext, ReactNode, useEffect, useState } from 'react'

type CartItem = {
  id: number
  name: string
  price: number
}

type CartContextType = {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
}

export const CartContext = createContext<CartContextType | null>(null)

export default function CartProvider({ children }: { children: ReactNode }) {

  const [cartItems, setcartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems')
    if (savedCart) {
      setcartItems(JSON.parse(savedCart))
    }
  }, [])

  
  const addToCart = (item: CartItem) => {
    setcartItems((prevItems) => {
      const isInCart = prevItems.some((i) => i.id === item.id)

      if (isInCart) return prevItems

      return [...prevItems, item]
    })
  }


  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}