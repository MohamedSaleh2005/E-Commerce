"use client"
import { CartContext, CartItem } from '@/Components/context _ to all/CartContext'
import Product from '@/Components/home/Product'
import React, { useContext } from 'react'

export default function page() {
  const { Favourites } = useContext(CartContext)!


  if (Favourites.length === 0) return <p className='text-(--p-color)'>No Favourites Yet.</p>
  return (
    <div>

      <div className='relative mb-5 py-2 border-b border-(--border-color) top_slide'>
        <h2 className='text-[20px] text-(--main-color) font-inter font-bold capitalize'>Your Favourite</h2>
        <p className='text-(--p-color) text-sm'>Add Best Selling products To Weekly Line Up</p>
      </div>

      <div className='grid grid-cols-5 gap-5'>
        {Favourites.map((item: CartItem) => (
          <Product
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              price: item.price,
              images: [item.images],
            }}
          />
        ))}
      </div>
    </div>
  )
}

