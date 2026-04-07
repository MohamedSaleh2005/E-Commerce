"use client"
import Product from './Product'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {  Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
type Props = {
  title : string
}
export default function SlideProduct({title}: Props) {
  return (
    <>

      <div className='relative mb-5 py-2 border-b border-(--border-color)  top_slide'>
        <h2 className='text-[20px] text-(--main-color) font-inter font-bold'>{title}</h2>
        <p className='text-(--p-color) text-sm'>Add Best Selling products To Weekly Line Up</p>
      </div>


      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation , Autoplay]}
        className="mySwiper"
        loop={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
      >
        <SwiperSlide><Product /></SwiperSlide>
        <SwiperSlide><Product /></SwiperSlide>
        <SwiperSlide><Product /></SwiperSlide>
        <SwiperSlide><Product /></SwiperSlide>
        <SwiperSlide><Product /></SwiperSlide>
        <SwiperSlide><Product /></SwiperSlide>

      </Swiper>


    </>
  )
}
