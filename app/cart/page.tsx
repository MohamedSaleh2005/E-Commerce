"use client"
import { CartContext } from '@/Components/context/CartContext'
import React, { useContext } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

export default function Page() {
    const { cartItems, IncreaseQuantity, DecreaseQuantity, RemoveItem } = useContext(CartContext)!
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    return (
        <div className='mt-35'>
            <div className='w-[70%] px-5 border-sm border-(--border-color) shadow shadow-[#2d2c2c] rounded-[5px] mx-auto'>
                <h1 className='border-b  border-(--border-color) py-3 text-(--main-color) font-bold text-xl'>Order Summary</h1>

                <div className='h-60 overflow-y-scroll no-scrollbar'>
                    {cartItems.length === 0 ? (
                        <p className='text-(--p-color) mt-1'>Your Cart Is empty.</p>
                    ) : (
                        cartItems.map((item, index) => (
                            <div key={index} className='flex items-center gap-5 justify-between h-30 border-b last:border-b-0 border-(--border-color) pr-5'>
                                <div className='flex items-center gap-5'>
                                    <img src={item.images} alt="" className='w-23' />

                                    <div className=''>
                                        <h4 className=' font-medium text-[14px] overflow-hidden ParaGraph'>{item.name}</h4>
                                        <p className='my-1 text-(--p-color)'>${item.price}</p>

                                        <div className='flex items-center gap-2 mt-2'>
                                            <button className='w-4.5 h-4.5 pb-1 flex items-center justify-center cursor-pointer rounded-xs border border-(--border-color) bg-(--border-color)' onClick={() => DecreaseQuantity(item.id)}>-</button>
                                            <span className='w-6 h-6 pb-1 flex items-center justify-center cursor-pointer rounded-xs border border-(--border-color) bg-(--border-color) text-(--main-color) text-xs font-medium'>{item.quantity}</span>
                                            <button className='w-4.5 h-4.5 pb-1 flex items-center justify-center cursor-pointer rounded-xs border border-(--border-color) bg-(--border-color)' onClick={() => IncreaseQuantity(item.id)}>+</button>
                                        </div>
                                    </div>

                                </div>
                                <button className='cursor-pointer text-red-600 text-lg hover:scale-110 transition-all duration-300' onClick={() => RemoveItem(item.id)}><FaTrashAlt /></button>
                            </div>
                        ))
                    )}
                </div>

                <div className='border-t border-(--border-color) pt-5'>
                    <div className='flex items-center justify-between mb-5'>
                        <p>Total:</p>
                        <span className='text-(--main-color) font-semibold'>${total.toFixed(2)}</span>
                    </div>

                    <div className='border-t border-(--border-color) py-4'>
                        <button type='submit' className='w-full bg-(--main-color) border border-(--main-color) text-(--white-color) py-1.5 font-semibold text-lg cursor-pointer transition-all duration-500 hover:bg-transparent hover:text-(--main-color)'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
