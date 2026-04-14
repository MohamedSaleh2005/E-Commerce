"use client"
import { createContext, ReactNode, useEffect, useState } from 'react'

type CartItem = {
  id: number
  name: string
  price: number
  images: string
  quantity: number
}

type CartContextType = {
  cartItems: CartItem[]
  addToCart: (item: Omit<CartItem, "quantity">) => void
  IncreaseQuantity: (id: number) => void
  DecreaseQuantity: (id: number) => void
  RemoveItem: (id: number) => void
}

export const CartContext = createContext<CartContextType | null>(null)

export default function CartProvider({ children }: { children: ReactNode }) {

  const [cartItems, setcartItems] = useState<CartItem[]>([])

  // Add Item To Cart

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setcartItems((prevItems) => {
      const isInCart = prevItems.some((i) => i.id === item.id)

      if (isInCart) return prevItems

      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  // Save Items In Local Storge

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems')
    if (savedCart) {
      setcartItems(JSON.parse(savedCart))
    }
  }, [])

  // IncreaseQuantity

  const IncreaseQuantity = (id: number) => {
    setcartItems(prevItems => prevItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
  }

  // DecreaseQuantity

  const DecreaseQuantity = (id: number) => {
    setcartItems(prevItems => prevItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item))
  }

  // Remove From Cart

  const RemoveItem = (id: number) => {
    setcartItems(prevItems => prevItems.filter(i => i.id !== id))
  }


  return (
    <CartContext.Provider value={{ cartItems, addToCart, IncreaseQuantity, DecreaseQuantity, RemoveItem }}>
      {children}
    </CartContext.Provider>
  )
}