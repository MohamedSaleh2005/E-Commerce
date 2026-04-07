import React from 'react'
import HeroSlider from './HeroSlider'
import SlideProduct from './SlideProduct'

export default function Home() {
  return (
     <div className='w-[80%] m-auto'>
     <HeroSlider />
     <SlideProduct title={"Smart Phones"}/>
     <SlideProduct title={"LapTops"}/>
     <SlideProduct title={"Watches"}/>
     <SlideProduct title={"Cars"}/>
     </div>
  )
}
