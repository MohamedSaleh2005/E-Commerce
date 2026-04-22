import { ProductDetailsType, ProductType } from '@/Components/context _ to all/productType'
import React from 'react'

type Props = {
  product: ProductDetailsType
  mainImage: string | undefined
  setMainImage: React.Dispatch<React.SetStateAction<string | undefined>>
}
export default function ProductImages({ product, mainImage, setMainImage }: Props) {
  return (
    <div className='md:w-[40%] flex flex-col items-center'>
      {/* Head Image */}
      <div>
        <img src={mainImage} alt={product.title} className='w-auto h-40 md:h-60 lg:h-75 mt-5 ' />
      </div>
      {/* Small Images */}
      <div className='flex justify-between gap-5  overflow-hidden md:mr-12 lg:mr-0 w-90 md:w-80'>
        {product.images.slice(0, 3).map((img, index) => (
          <img src={img} key={index} alt={product.title} className='w-auto h-25 mt-5 cursor-pointer' onClick={() => setMainImage(img)}></img>
        ))}
      </div>
    </div>
  )
}
