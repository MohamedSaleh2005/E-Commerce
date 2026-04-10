"use client"
import SlideProduct from '@/Components/home/SlideProduct'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaCartArrowDown, FaRegHeart, FaShare, FaStar } from 'react-icons/fa'
import { FaStarHalfStroke } from 'react-icons/fa6'
import { IoMdShare } from 'react-icons/io'
import { TiShoppingCart } from 'react-icons/ti'
import { ProductType } from '@/Components/home/productType'
type ProductDetailsType = ProductType & {
  brand: string
  stock: number
  description: string
  availabilityStatus: string
  category: string
}
export default function page() {


    const { id } = useParams() as { id: string }
    const [product, setproduct] = useState<ProductDetailsType | null>(null)
    const [loading, setloading] = useState<boolean>(true)
    const [mainImage, setMainImage] = useState<string | undefined>(product?.images[0])
    const [Category, setCategory] = useState<ProductType[]>([])
    const [LoadCategory, setLoadCategory] = useState<boolean>(true)


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`)
                const data = await res.json()
                setproduct(data)
                setloading(false)
            } catch (error) {
                console.log(error);

            }
        }
        fetchProduct()
    }, [id])

    useEffect(() => {
        if (product?.images?.length) {
            setMainImage(product.images[0])
        }
    }, [product])
    useEffect(() => {
        if (!product) return;
        fetch(`https://dummyjson.com/products/category/${product.category}`)
            .then((res) => res.json())
            .then((data) => {
                setCategory(data.products)
                setLoadCategory(false)
            })


    }, [product?.category])



    if (loading) return <p>Loading...</p>
    if (!product) return <p>Product Not Found</p>
    return (

        <div className='w-[80%] m-auto'>

            <div className='flex gap-5 items-center mb-10'>

                <div className='w-[40%] flex flex-col items-center'>
                    <div>
                        <img src={mainImage} alt={product.title} className='w-auto h-80' />
                    </div>

                    <div className='flex justify-between cursor-pointer gap-5 overflow-hidden'>
                        {product.images.map((img, index) => (
                            <img src={img} key={index} alt={product.title} className='w-auto h-30' onClick={() => setMainImage(img)}></img>
                        ))}
                    </div>
                </div>

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

                    <button className='btn my-5'>Add to Cart <TiShoppingCart className='text-lg' /></button>

                    <div className='flex gap-3.5 transition-all duration-400'>
                        <span className='w-8 h-8 hover:text-(--main-color) bg-(--bg-color) flex items-center rounded-full cursor-pointer justify-center transition-all duration-300'><FaCartArrowDown /></span>
                        <span className='w-8 h-8 hover:text-(--main-color) bg-(--bg-color) flex items-center rounded-full cursor-pointer justify-center transition-all duration-300'><FaRegHeart /></span>
                        <span className='w-8 h-8 hover:text-(--main-color) bg-(--bg-color) flex items-center rounded-full cursor-pointer justify-center transition-all duration-300'><IoMdShare /></span>
                    </div>
                </div>

            </div>


            {LoadCategory ? (
                <p>loading...</p>
            ) : <SlideProduct key={product.category} title={product.category.replace("-", " ")} data={Category} />}

        </div>
    )
}
