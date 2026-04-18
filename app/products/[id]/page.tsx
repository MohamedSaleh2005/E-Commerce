"use client"
import SlideProduct from '@/Components/home/SlideProduct'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ProductDetailsType, ProductType } from '@/Components/context _ to all/productType'
import Loading from './Loading'
import ProductImages from './ProductImages'
import ProductInfo from './ProductInfo'

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



    if (loading) return <Loading />
    if (!product) return <p>Product Not Found</p>
    return (

        <div className=''>
            <div className='flex gap-5 items-center mb-10'>
                <ProductImages product={product} mainImage={mainImage} setMainImage={setMainImage} />
                <ProductInfo product={product} />
            </div>

            <SlideProduct key={product.category} title={product.category.replace("-", " ")} data={Category} loading={loading} />
        </div>
    )
}
