"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

export default function HeroSlider() {
    return (

        <div className='hero'>
            <div>
                <Swiper pagination={{ clickable: true }} modules={[Pagination, Autoplay]} loop={true} autoplay={{ delay: 3500, disableOnInteraction: false, }} className="h-95">

                    <SwiperSlide>

                        <div className='content'>
                            <h4>Introducing the new</h4>
                            <h3>Microsoft Xbox <br /> 360 Controller</h3>
                            <p>Windows Xp/10/8 Ps3, Tv Box</p>
                            <Link href={""} className='btn'>Shop Now</Link>
                        </div>
                        <img src="img\banner_Hero1.jpg" alt="" />

                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='content'>
                            <h4 >new arrival</h4>
                            <h3>Xiaomi Air 75 <br />Earbuds</h3>
                            <p>AAC HD Sound Quality</p>
                            <Link href={""} className='btn'>Shop Now</Link>
                        </div>
                        <img src="img\banner_Hero2.jpg" alt="" />

                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='content'>
                            <h4>mini-x6u speaker</h4>
                            <h3>Led Bluetooth <br /> Speaker Lamp</h3>
                            <p>Upport 3.5 mm jack audio input</p>
                            <Link href={""} className='btn'>Shop Now</Link>
                        </div>
                        <img src="img\banner_Hero3.jpg" alt="" />

                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    )
}