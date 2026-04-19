"use client"
import { createContext, ReactNode, useEffect, useState } from 'react'

export type CartItem = {
  id: number
  name: string
  price: number
  images: string
  quantity: number
}

type CartContextType = {
  cartItems: CartItem[]
  addToCart: (item: Omit<CartItem, "quantity">) => void
  AddToFav: (item: Omit<CartItem, "quantity">) => void
  IncreaseQuantity: (id: number) => void
  DecreaseQuantity: (id: number) => void
  RemoveItem: (id: number) => void
  RemoveFav: (id: number) => void
  Favourites: CartItem[]
}

export const CartContext = createContext<CartContextType | null>(null)

export default function CartProvider({ children }: { children: ReactNode }) {

// Favourite
  const [Favourites, setFavourite] = useState<CartItem[]>([])
  const [isMounted, setIsMounted] = useState(false)

  // تحميل
  useEffect(() => {
    const saved = localStorage.getItem("FavouritesItems")
    if (saved) {
      const parsed = JSON.parse(saved)
      setFavourite(Array.isArray(parsed) ? parsed : [])
    }
    setIsMounted(true)
  }, [])

  const AddToFav = (item: any) => {
    const favItem: CartItem = {
      id: item.id,
      name: item.title || item.name, 
      price: item.price,
      images: Array.isArray(item.images) ? item.images[0] : item.images,
      quantity: 1
    }

    setFavourite(prev => {
      const exists = prev.some(i => i.id === favItem.id)
      return exists ? prev : [...prev, favItem]
    })
  }

  
  const RemoveFav = (id: number) => {
    setFavourite(prev => prev.filter(i => i.id !== id))
  }

 
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("FavouritesItems", JSON.stringify(Favourites))
    }
  }, [Favourites, isMounted])

// Cart
  const [cartItems, setcartItems] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems')
    if (savedCart) {
      setcartItems(JSON.parse(savedCart))
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }
  }, [cartItems, isLoaded])

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setcartItems(prev => {
      const exists = prev.some(i => i.id === item.id)
      if (exists) return prev

      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const IncreaseQuantity = (id: number) => {
    setcartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const DecreaseQuantity = (id: number) => {
    setcartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  const RemoveItem = (id: number) => {
    setcartItems(prev => prev.filter(i => i.id !== id))
  }

  // PROVIDER 

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        IncreaseQuantity,
        DecreaseQuantity,
        RemoveItem,
        Favourites,
        AddToFav,
        RemoveFav
      }}
    >
      {children}
    </CartContext.Provider>
  )
}