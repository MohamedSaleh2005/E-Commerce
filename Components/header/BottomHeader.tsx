"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaAngleUp, FaUserPlus } from 'react-icons/fa'
import { IoMdList } from 'react-icons/io'
import { PiSignInBold } from 'react-icons/pi'

type Category = {
  slug: string
  name: string
}
type NavLinks = {
  title: string
  link: string
}
const navlinks: NavLinks[] = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
]
export default function BottomHeader() {
  const [Category, setCategory] = useState<Category[]>([])
  const [open, setopen] = useState<boolean>(true)
  const location = usePathname()

  useEffect(() => {
    setopen(true)
  } , [location])

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data: (Category[])) => setCategory(data))

  }, [])


  return (
    <div className='bg-(--main-color) '>
      <div className='flex items-center lg:justify-between lg:w-[80%]  px-3 lg:px-0 md:mr-4 lg:m-auto'>
        <nav className='flex items-center text-sm h-10 m-auto lg:m-0'>

          <div className='md:w-50 h-full relative' onClick={() => setopen(!open)}>
            {/* Category */}
            <div className='h-full w-full flex justify-between items-center bg-(--main-color) m-auto cursor-pointer text-(--white-color)'>
              <IoMdList className='md:ml-8 md:mr-0 lg:mx-0'/>
              <p className='font-semibold hidden md:block'>Browse Category</p>
              <FaAngleUp className={`hidden md:block mr-3 lg:mx-0${open ? "rotate-180" : ""} transition-all duration-300`} />
            </div>


            <div className={`absolute top-full left-0 w-40 bg-(--white-color) border flex flex-col border-[#999] max-h-75 overflow-y-auto no-scrollbar transition-all duration-700 Close z-5 ${open ? "Open" : ""}`}>
              {Category.map((cat) => (
                <Link href={`/category/${cat.slug}`} key={cat.slug} className='py-2 px-1 text-sm border-b border-(--border-color)'>{cat.name}</Link>
              ))}
            </div>
          </div>
              {/* Nav Items */}
          <div className='flex h-full md:gap-2 ml-8 lg:ml-25'>
            {navlinks.map((li) => (
              <li key={li.title} className={`h-full flex items-center lg:px-5 px-2 text-[10px] md:text-[14px] text-(--white-color) ${location === li.link ? "bg-sky-700/60" : ""}`}><Link href={li.link}>{li.title}</Link></li>
            ))}
          </div>

        </nav>

        <div className='flex gap-4 ml-2 md:mr-15 lg:mr-0 text-lg'>
          <Link href={''}><PiSignInBold className='text-(--white-color)' /></Link>
          <Link href={''}><FaUserPlus className='text-(--white-color)' /></Link>
        </div>
      </div>
    </div>
  )
}
