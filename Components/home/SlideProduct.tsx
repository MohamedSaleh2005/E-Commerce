"use client"
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Product from './Product'
import {ProductType} from './productType'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type Props = {
  title: string
  data: ProductType[]

}
export default function SlideProduct({ title, data }: Props) {
  return (
    <>

      <div className='relative mb-5 py-2 border-b border-(--border-color) top_slide'>
        <h2 className='text-[20px] text-(--main-color) font-inter font-bold capitalize'>{title}</h2>
        <p className='text-(--p-color) text-sm'>Add Best Selling products To Weekly Line Up</p>
      </div>


      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        loop={true} autoplay={{ delay: 3500, disableOnInteraction: false, }}
      >
        {data?.map((item: ProductType) => (

          <SwiperSlide key={item.title}><Product item={item} /></SwiperSlide>
        ))}

      </Swiper>


    </>
  )
}
