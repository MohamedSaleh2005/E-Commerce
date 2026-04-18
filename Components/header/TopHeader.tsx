"use client"
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/img/logo.png'
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from 'react-icons/bs';
import { useContext } from 'react';
import { CartContext } from '../context _ to all/CartContext';
import SearchBox from '../../app/search/[query]/SearchBox';


export default function TopHeader() {

  const { cartItems } = useContext(CartContext)!
  return (
    <div>
      <div className='flex items-center justify-between py-3.75  w-[80%] m-auto'>

        <Link href="/" className='w-40'>
          <Image src={logo} alt="logo" className='w-30' />
        </Link>

        <SearchBox />

        <div className='flex gap-7.5 items-center'>

          {/* Favourite Count*/}
          <div className='relative cursor-pointer'>
            <FaRegHeart className='text-[20px]' />
            <span className='absolute -top-2 -right-2.5 flex items-center justify-center w-4 h-4 text-xs rounded-full bg-(--main-color) text-white'>0</span>
          </div>

          {/* Cart Count*/}
          <div className='relative cursor-pointer'>
            <Link href={'/cart'}>
              <BsCart4 className='text-[24px]' />
              <span className='absolute -top-1.75 -right-2 flex items-center justify-center w-4 h-4 text-xs rounded-full bg-(--main-color) text-white'>{cartItems.length}</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}