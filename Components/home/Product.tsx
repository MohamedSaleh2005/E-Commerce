import Link from 'next/link'
import { FaCartArrowDown, FaCheck, FaRegHeart, FaStar } from 'react-icons/fa'
import { FaStarHalfStroke } from 'react-icons/fa6'
import { IoMdShare } from 'react-icons/io'
import { ProductType } from '../context _ to all/productType'
import { useContext } from 'react'
import { CartContext } from '../context _ to all/CartContext'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

type Props = {
  item: ProductType
}

export default function Product({ item }: Props) {

  const router = useRouter()
  const { cartItems, addToCart, AddToFav, Favourites, RemoveFav } = useContext(CartContext)!

  // Handle Favourites
  const IsInFav = Favourites.some((i: { id: number }) => i.id === item.id);
  const HandleToFav = () => {
    if (IsInFav) {
      RemoveFav(item.id)
      toast.error(
        <div className='text-sm w-60'>
          {`${item.title} Removed From Favourites`}
        </div>
      )
    } else {
      AddToFav({
        id: item.id,
        name: item.title,
        price: item.price,
        images: item.images[0]
      })
      toast.success(
        <div className='text-sm w-60'>
          {`${item.title} Added To Favourites`}
        </div>
      )
    }
  }

  // Handle Cart

  const IsInCart = cartItems.some((i: { id: number }) => i.id === item.id);
  const HandleToCart = () => {
    addToCart({
      id: item.id,
      name: item.title,
      price: item.price,
      images: item.images[0]
    })


    toast.success(
      <div className='flex items-center gap-5 min-w-60 max-w-60 '>
        <img src={item.images[0]} alt="" className='h-12.5 w-auto object-cover' />

        <div className='flex flex-col gap-1 text-sm'>
          <strong className='overflow-hidden ParaGraph '>{item.title}</strong>
          Added To Cart
          <div>
            <button className='btn mt-1 rounded-2xl bg-(--main-color) text-white' onClick={() => router.push('/cart')}>
              View Cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 3500 }
    )
  }




  return (
    <div className={`relative mb-5 w-45 h-75 bg-(--white-color) pb-1.25 px-3.75 border border-(--border-color) hover:border-(--main-color) rounded-[5px] overflow-hidden hover:shadow-lg transition-all duration-300 Card`}>
      <Link href={`/products/${item.id}`}>

        <span className={`flex text-[14px] items-center gap-1 absolute right-[37%] mt-3 font-sans text-(--main-color) transition-all duration-300 ${IsInCart ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"} `}><FaCheck className='text-green-500' />In Cart</span>


        <div className='relative h-45 px-2.5 mt-3 flex items-center justify-center mb-3.25'>
          <img src={item.images[0]} alt="" className='h-30 w-auto' />
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
      </Link>

      <div className='absolute top-[40%] text-sm translate-y-[-50%] flex flex-col -right-12.5 gap-3.5 RemoveIcon transition-all duration-400'>
        <span className={`w-7 h-7 hover:text-(--main-color) bg-(--bg-color) flex items-center rounded-full cursor-pointer justify-center transition-all duration-300 ${IsInCart ? "bg-(--main-color) text-white hover:text-white pointer-events-none" : ""} `} onClick={HandleToCart}><FaCartArrowDown /></span>
        <span className={`w-7 h-7 hover:text-(--main-color) bg-(--bg-color) flex items-center rounded-full cursor-pointer justify-center transition-all duration-300 ${IsInFav ? "bg-(--main-color) text-white hover:text-white" : ""}`} onClick={HandleToFav}><FaRegHeart /></span>
        <span className='w-7 h-7 hover:text-(--main-color) bg-(--bg-color) flex items-center rounded-full cursor-pointer justify-center transition-all duration-300'><IoMdShare /></span>
      </div>
    </div>
  )
}
