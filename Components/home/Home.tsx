"use client"
import React, { useEffect, useState } from 'react'
import HeroSlider from './HeroSlider'
import SlideProduct from './SlideProduct'
import {ProductType} from './productType'

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories",
  "mens-watches",
]
export default function Home() {
  const [products, setproducts] = useState <Record<string, ProductType[]>>({})
  const [loading, setloading] = useState <boolean> (true)
  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (cat) => {
            const res = await fetch(`https://dummyjson.com/products/category/${cat}`);
            const data = await res.json();
            return [cat, data.products] as [string, ProductType[]]
          })
        )

        const productsData = Object.fromEntries(results)
        setproducts(productsData)
      } catch (error) {
        console.log(error)
      } finally { setloading(false) }
    }

    fetchproducts()
  }, [])


  return (
    loading ? (<p>loading...</p>) : (
      <div className='w-[80%] m-auto'>
        <HeroSlider />
        {categories.map((cat) => (
        <SlideProduct key={cat} title={cat.replace("-", " ")} data={products[cat]} />
        ))}
      </div>
    )
  )
}
