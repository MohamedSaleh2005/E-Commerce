"use client"
import Product from '@/Components/home/Product'
import SliderLoading from '@/Components/context _ to all/SliderLoading'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ProductType } from '@/Components/context _ to all/productType'

type ApiResponse = {
  products: ProductType[]
  limit: number
}

export default function page() {
const { category } = useParams() as { category: string }  
const [ProCategory, setProCategory] = useState <ProductType[]>([])
  const [limit, setLimit] = useState <number> (0)
  const [loading, setloading] = useState <boolean> (true)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data: ApiResponse) => { setProCategory(data.products), setLimit(data.limit), setloading(false) })

  }, [category])

  // Skeleton
  if (loading) return <SliderLoading />

  return (
    <div>

      <div className='relative mb-5 py-2 border-b border-(--border-color) top_slide'>
        <h2 className='text-[20px] text-(--main-color) font-inter font-bold capitalize'>{category} : {limit}</h2>
        <p className='text-(--p-color) text-sm'>Add Best Selling products To Weekly Line Up</p>
      </div>

      <div className='grid grid-cols-5 gap-5'>
        {ProCategory.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
