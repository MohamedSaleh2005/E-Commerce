"use client"

import SliderLoading from "@/Components/context _ to all/SliderLoading"
import Product from "@/Components/home/Product"
import { useParams } from "next/navigation"
import { use, useEffect, useState } from "react"
import { ProductType } from "@/Components/context _ to all/productType"


export default function Page() {

  const { query } = useParams()
  const [loading, setloading] = useState<boolean>(true)
  const [results, setResults] = useState<ProductType[]>([])


  useEffect(() => {

    if (!query) return
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(query as string)}`
        )
        const data = await res.json()
        setResults(data.products || [])
      } catch (error) {
        console.error("Search Error", error)
      }
      finally {
        setloading(false)
      }
    }

    fetchData()

  }, [query])


  if (loading) return <SliderLoading />       // Skeleton
  if (results.length === 0) return <p className='text-(--p-color)'>No Results Found.</p>

  return (
    <div>

      <div className='relative mb-5 py-2 border-b border-(--border-color) top_slide'>
        <h2 className='text-[20px] text-(--main-color) font-inter font-bold capitalize'>Results For : {query}</h2>
        <p className='text-(--p-color) text-sm'>Add Best Selling products To Weekly Line Up</p>
      </div>

      <div className='grid grid-cols-5 gap-5'>
        {results.map((item: ProductType) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}