import React from 'react'
import { FaCartArrowDown, FaRegHeart, FaStar } from 'react-icons/fa'
import { FaStarHalfStroke } from 'react-icons/fa6'
import { IoMdShare } from 'react-icons/io'

export default function Product() {
  return (
    <div className='relative mb-15 w-45 h-75 bg-(--white-color) py-1.25 px-3.75 border border-(--border-color) hover:border-(--main-color) rounded-[5px] overflow-hidden hover:shadow-lg transition-all duration-300 Card'>
      <div className='relative h-45 px-2.5 flex items-center justify-center mb-3.25'>
        <img src="https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/1.png" alt="" className=' h-40 w-auto' />
      </div>

      <p className='mb-2.5 text-(--color-heading) overflow-hidden ParaGraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde asperiores accusamus.</p>

      <div className='gap-1.25 flex my-1.5 text-[#ffdf3df6]'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfStroke />
      </div>

      <p className='text-(--main-color) font-semibold text-[18px]'>$89.99</p>

      <div className='absolute top-[40%]  translate-y-[-50%] flex flex-col -right-12.5 gap-2.5 RemoveIcon transition-all duration-400'>
        <span className='w-7.5 h-7.5 hover:text-(--main-color) bg-(--bg-color) flex items-center rounded-full cursor-pointer justify-center transition-all duration-300'><FaCartArrowDown /></span>
        <span className='w-7.5 h-7.5 hover:text-(--main-color) bg-(--bg-color) flex items-center rounded-full cursor-pointer justify-center transition-all duration-300'><FaRegHeart /></span>
        <span className='w-7.5 h-7.5 hover:text-(--main-color) bg-(--bg-color) flex items-center rounded-full cursor-pointer justify-center transition-all duration-300'><IoMdShare /></span>
      </div>
    </div>
  )
}
