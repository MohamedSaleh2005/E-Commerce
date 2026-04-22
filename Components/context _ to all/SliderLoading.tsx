import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";

export default function SliderLoading() {
    const [count, setCount] = useState<number>(5);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCount(2);
            } else if (window.innerWidth < 1024) {
                setCount(3);
            } else {
                setCount(5);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className="mt-15">
            {/* Header */}
            <div className='relative mb-5 py-2 border-b border-(--border-color) top_slide'>
                <Skeleton height={18} width={200} />
                <Skeleton height={10} width={280} className="mt-2" />
            </div>

            {/* Skeleton Slider */}
            <div className="flex gap-5 overflow-hidden mb-10">
                {Array(count).fill(0).map((_, i) => (
                    <div key={i} className='w-40 md:w-48'>

                        <Skeleton height={180} />

                        <Skeleton height={10} className="mt-7" />
                        <Skeleton height={10} width="60%" />
                        <Skeleton height={12} width={70} className="mt-1" />

                    </div>
                ))}
            </div>
        </div>
    )
}