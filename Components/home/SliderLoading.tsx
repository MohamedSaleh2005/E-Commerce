import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import 'swiper/css';
import 'swiper/css/navigation';

export default function SliderLoading() {
    return (
        <>
            {/* Header */}
            <div className='relative mb-5 py-2 border-b border-(--border-color) top_slide'>
                <Skeleton height={18} width={200} />
                <Skeleton height={10} width={300} className="mt-2" />
            </div>

            {/* Skeleton Slider */}
            <div className="flex gap-10 overflow-hidden mb-10">
                {Array(5).fill(0).map((_, i) => (
                    <div key={i} className="w-1/5">

                        <Skeleton height={170} />

                        <Skeleton height={10} className="mt-7" />
                        <Skeleton height={10} width="70%" />

                        <Skeleton height={12} width={100} className="mt-1" />

                    </div>
                ))}
            </div>
        </>
    )
}