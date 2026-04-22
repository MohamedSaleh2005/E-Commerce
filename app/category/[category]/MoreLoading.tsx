import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function MoreLoading() {
    return (

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-7 mb-10">
            {Array(6).fill(0).map((_, i) => (
                <div key={i} className='w-40 md:w-48'>
                    <Skeleton height={180} />

                    <Skeleton height={10} className="mt-7" />
                    <Skeleton height={10} width="60%" />
                    <Skeleton height={12} width={70} className="mt-1" />
                </div>
            ))}
        </div>
    )
}
