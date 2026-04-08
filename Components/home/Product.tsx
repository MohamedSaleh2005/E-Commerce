import React from 'react'
import { FaCartArrowDown, FaRegHeart, FaStar } from 'react-icons/fa'
import { FaStarHalfStroke } from 'react-icons/fa6'
import { IoMdShare } from 'react-icons/io'
type ProductType = {
  title: string
  price: number
  images: string[]
}
type Props = {
  item: ProductType
}
export default function Product({ item }: Props) {


  return (
    <div className='relative mb-15 w-45 h-75 bg-(--white-color) py-1.25 px-3.75 border border-(--border-color) hover:border-(--main-color) rounded-[5px] overflow-hidden hover:shadow-lg transition-all duration-300 Card'>
      <div className='relative h-45 px-2.5 flex items-center justify-center mb-3.25'>
        <img src={item.images[0]} alt="" className='h-40 w-auto' />
      </div>

      <p className='mb-2.5 text-(--color-heading) overflow-hidden ParaGraph'>{item.title}</p>

      <div className='gap-1.25 flex my-1.5 text-[#ffdf3df6]'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfStroke />
      </div>

      <p className='text-(--main-color) font-semibold text-[18px]'>${item.price}</p>

      <div className='absolute top-[40%]  translate-y-[-50%] flex flex-col -right-12.5 gap-3.5 RemoveIcon transition-all duration-400'>
        <span className='w-6 h-6 hover:text-(--main-color) bg-(--bg-color) flex items-center rounded-full cursor-pointer justify-center transition-all duration-300'><FaCartArrowDown /></span>
        <span className='w-6 h-6 hover:text-(--main-color) bg-(--bg-color) flex items-center rounded-full cursor-pointer justify-center transition-all duration-300'><FaRegHeart /></span>
        <span className='w-6 h-6 hover:text-(--main-color) bg-(--bg-color) flex items-center rounded-full cursor-pointer justify-center transition-all duration-300'><IoMdShare /></span>
      </div>
    </div>
  )
}
