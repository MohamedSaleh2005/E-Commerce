"use client"
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Product from './Product'
import { ProductType } from '../context _ to all/productType'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SliderLoading from '../context _ to all/SliderLoading';

type Props = {
  title: string
  data: ProductType[]
  loading: boolean

}
export default function SlideProduct({ title, data, loading }: Props) {
  if (loading) return <SliderLoading />
  return (
    <>
      <div className='relative mb-5 py-2 border-b border-(--border-color) top_slide'>
        <h2 className='text-[20px] text-(--main-color) font-inter font-bold capitalize'>{title}</h2>
        <p className='text-(--p-color) text-sm'>Add Best Selling products To Weekly Line Up</p>
      </div>


      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        loop={true} autoplay={{ delay: 5500, disableOnInteraction: false, }}
        breakpoints={{
          0: {
            slidesPerView: 2, // موبايل
            spaceBetween:15
          },
          768: {
            slidesPerView: 3, // تابلت
          },
          1024: {
            slidesPerView: 5, // ديسكتوب
          },
        }}

      >
        {data?.map((item: ProductType) => (

          <SwiperSlide key={item.title}><Product item={item} /></SwiperSlide>
        ))}

      </Swiper>


    </>
  )
}
