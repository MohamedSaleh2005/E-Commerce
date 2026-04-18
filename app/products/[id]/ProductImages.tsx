import { ProductDetailsType, ProductType } from '@/Components/context _ to all/productType'
import React from 'react'

type Props = {
  product: ProductDetailsType
  mainImage: string | undefined
  setMainImage: React.Dispatch<React.SetStateAction<string | undefined>>
}
export default function ProductImages({ product, mainImage, setMainImage }: Props) {
  return (
    <div className='w-[40%] flex flex-col items-center'>
      {/* Head Image */}
      <div>
        <img src={mainImage} alt={product.title} className='w-auto h-80 mt-3' />
      </div>
      {/* Small Images */}
      <div className='flex justify-between cursor-pointer gap-5 overflow-hidden'>
        {product.images.slice(0, 3).map((img, index) => (
          <img src={img} key={index} alt={product.title} className='w-auto h-25 mt-5' onClick={() => setMainImage(img)}></img>
        ))}
      </div>
    </div>
  )
}
