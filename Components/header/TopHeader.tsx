import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/img/logo.png'
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { BsCart4 } from 'react-icons/bs';

export default function TopHeader() {
  return (
    <div>
      <div className='flex items-center justify-between py-3.75  w-[80%] m-auto'>

        <Link href="/" className='w-40'>
          <Image src={logo} alt="logo" className='w-30' />
        </Link>

        <form action="" className='w-100 flex items-center bg-(--bg-color) rounded-[30px] border border-(--main-color)'>
          <input type="text" name='search' placeholder='Search all products' className='h-7.75 w-90 py-1.25 px-7.5 bg-(--bg-color) rounded-[30px] text-sm' />
          <button type='submit' className='h-7.75 w-15 bg-(--main-color) text-[18px] rounded-r-[30px] cursor-pointer '><FaSearch className='m-auto text-(--white-color) text-sm' /></button>
        </form>

        <div className='flex gap-7.5 items-center'>

          {/* Favourite Count*/}
          <div className='relative cursor-pointer'>
            <FaRegHeart className='text-[20px]' />
            <span className='absolute -top-2 -right-2.5 flex items-center justify-center w-4 h-4 text-xs rounded-full bg-(--main-color) text-white'>0</span>
          </div>

          {/* Cart Count*/}
          <div className='relative cursor-pointer'>
            <BsCart4 className='text-[24px]' />
            <span className='absolute -top-1.75 -right-2 flex items-center justify-center w-4 h-4 text-xs rounded-full bg-(--main-color) text-white'>0</span>
          </div>

        </div>
      </div>
    </div>
  )
}