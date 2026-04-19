"use client"
import { CartContext } from '@/Components/context _ to all/CartContext'
import { ProductDetailsType } from '@/Components/context _ to all/productType'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { FaRegHeart, FaStar, FaStarHalfStroke } from 'react-icons/fa6'
import { IoMdShare } from 'react-icons/io'
import { TiShoppingCart } from 'react-icons/ti'

type Props = {
    product: ProductDetailsType
}
export default function ProductInfo({ product }: Props) {
    const { addToCart, cartItems, RemoveFav, AddToFav, Favourites } = useContext(CartContext)!
    const router = useRouter()

    // Handle Favpurites
    const IsInFav = Favourites.some((i: { id: number }) => i.id === product.id);
    const HandleToFav = () => {
        if (IsInFav) {
            RemoveFav(product.id)
            toast.error(
                <div className='text-sm'>
                    {`${product.title} Removed From Favourites`}
                </div>
            )
        } else {
            AddToFav({
                id: product.id,
                name: product.title,
                price: product.price,
                images: product.images[0]
            })
            toast.success(
                <div className='text-sm'>
                    {`${product.title} Added To Favourites`}
                </div>
            )
        }
    }

    // Handle Cart
    const IsInCart = cartItems.some((i: { id: number }) => i.id === product.id);
    const HandleToCart = () => {
        addToCart({
            id: product.id,
            name: product.title,
            price: product.price,
            images: product.images[0]
        })


        toast.success(
            <div className='flex products-center gap-5 min-w-60 max-w-60 '>
                <img src={product.images[0]} alt="" className='h-12.5 w-auto object-cover' />

                <div className='flex flex-col gap-1 text-sm'>
                    <strong className='overflow-hidden ParaGraph '>{product.title}</strong>
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

        <div className='w-[50%]'>
            <h1 className='font-bold text-[30px] text-(--main-color)'>{product.title}</h1>
            <div className='gap-1.25 flex my-1.5 text-[#ffdf3df6]'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />
            </div>

            <p className='font-bold'>${product.price}</p>
            <h5 className='my-2 font-normal'>Availability:<span className='text-(--main-color)'> {product.availabilityStatus}</span></h5>
            <h5 className='font-normal'>Brand:<span className='text-(--main-color)'> {product.brand}</span></h5>
            <p className='w-[130%] text-sm my-2 text-(--p-color)'>{product.description}</p>
            <h5 className='font-semibold text-(--main-color)'>Hurry Up! Only<span> {product.stock} </span>Products Left In The Stock.</h5>

            <button className={`btn my-5 rounded-sm border bg-(--main-color) border-(--main-color) transition-all duration-300  ${IsInCart ? "bg-transparent text-(--main-color) pointer-events-none" : "text-white"} `} onClick={HandleToCart}>{IsInCart ? "product In Cart" : "Add to Cart "}<TiShoppingCart className='text-[16px]' /></button>

            <div className='flex gap-3.5 transition-all duration-400'>
                <span className={`w-8 h-8 hover:text-(--main-color) bg-(--bg-color) flex items-center rounded-full cursor-pointer justify-center transition-all duration-300 ${IsInFav ? "bg-(--main-color) text-white hover:text-white" : ""}`} onClick={HandleToFav}><FaRegHeart /></span>
                <span className='w-8 h-8 hover:text-(--main-color) bg-(--bg-color) flex items-center rounded-full cursor-pointer justify-center transition-all duration-300'><IoMdShare /></span>
            </div>
        </div>)
}
