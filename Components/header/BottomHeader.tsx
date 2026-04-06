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
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data: (Category[])) => setCategory(data))

  }, [])

  console.log(open);

  return (
    <div className='bg-(--main-color) '>
      <div className='flex items-center justify-between w-[80%] m-auto '>
        <nav className='flex items-center text-sm gap-25 h-10'>

          <div className='w-55 h-full relative' onClick={() => setopen(!open)}>
            <div className='h-full w-full flex justify-between items-center bg-(--main-color) px-3.75 cursor-pointer text-(--white-color)'>
              <IoMdList />
              <p className='font-semibold'>Browse Category</p>
              <FaAngleUp className={`${open ? "rotate-180" : ""} transition-all duration-300`} />
            </div>


            <div className={`absolute top-full left-0 w-full bg-(--white-color)  border flex flex-col border-[#999] max-h-75 overflow-y-auto no-scrollbar transition-all duration-700 Close ${open ? "Open" : ""}`}>
              {Category.map((cat) => (
                <Link href={cat.slug} key={cat.slug} className='py-2 px-1 text-sm border-b border-(--border-color)'>{cat.name}</Link>
              ))}
            </div>
          </div>

          <div className='flex h-full'>
            {navlinks.map((li) => (
              <li key={li.title} className={`h-full flex items-center px-6.25 text-(--white-color) ${location === li.link ? "bg-sky-700/60" : ""}`}><Link href={li.link}>{li.title}</Link></li>
            ))}
          </div>

        </nav>

        <div className='flex gap-4 text-lg'>
          <Link href={''}><PiSignInBold className='text-(--white-color)' /></Link>
          <Link href={''}><FaUserPlus className='text-(--white-color)' /></Link>
        </div>
      </div>
    </div>
  )
}
