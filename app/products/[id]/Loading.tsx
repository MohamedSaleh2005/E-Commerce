import SliderLoading from '@/Components/home/SliderLoading';
import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <div className='w-[80%] m-auto'>

      <div className='flex gap-5 items-center mb-10'>

        <div className='w-[40%] flex flex-col items-center mt-10'>

          <Skeleton height={280} width={260} className="mt-3" />

          <div className='flex justify-between gap-12 '>
            {Array(3).fill(0).map((_, i) => (
              <Skeleton key={i} height={70} width={70} className='mt-8' />
            ))}
          </div>
        </div>

        <div className='w-[50%] mt-5'>


          <Skeleton height={30} width={300} />

          {/* stars */}
          <div className='flex gap-2 my-2'>
            {Array(5).fill(0).map((_, i) => (
              <Skeleton key={i} circle height={13} width={13} />
            ))}
          </div>

          {/* price */}
          <Skeleton height={15} width={120} />

          {/* availability */}
          <Skeleton height={12} width={170} className="my-2" />

          {/* brand */}
          <Skeleton height={12} width={140} />

          {/* description */}
          <Skeleton count={2} height={10} className="my-2" />

          {/* stock */}
          <Skeleton height={20} width={350} />

          {/* button */}
          <Skeleton height={30} width={120} className="my-5" />

          {/* icons */}
          <div className='flex gap-5.5'>
            {Array(3).fill(0).map((_, i) => (
              <Skeleton key={i} circle height={27} width={27} />
            ))}
          </div>

        </div>

      </div>

      <SliderLoading />

    </div>
  )
}