import React from 'react'
import Product from './Product'

export default function SlideProduct() {
  return (
    <>

      <div className='relative mb-5 py-2 border-b border-(--border-color)  top_slide'>
        <h2 className='text-[20px] text-(--main-color) font-inter font-bold'>Smart Phones</h2>
        <p className='text-(--p-color) text-sm'>Add Best Selling products To Weekly Line Up</p>
      </div>

      <Product />

    </>
  )
}
