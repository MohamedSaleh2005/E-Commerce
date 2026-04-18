"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { ProductType } from "@/Components/context _ to all/productType"


export default function SearchBox() {
    const [search, setSearch] = useState<string>("")
    const [Suggestion, setSuggestion] = useState<ProductType[]>([])
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!search.trim()) return
        const cleanedSearch = encodeURIComponent(search.trim())
        setSuggestion([])
        router.push(`/search/${cleanedSearch}`)
    }

    useEffect(() => {

        if (search.trim() === "") {
            setSuggestion([])
            return;
        }

        const debounce = setTimeout(async () => {
            try {
                const res = await fetch(
                    `https://dummyjson.com/products/search?q=${search}`
                )
                const data = await res.json()
                setSuggestion(data.products?.slice(0, 5) || [])
            } catch (error) {
                console.error("Search Error", error)
                setSuggestion([])
            }
        }, 20)

        return () => clearTimeout(debounce)
    }, [search])


    const handleUl = (item: ProductType) => {
        router.push(`/products/${item.id}`)
        setSuggestion([])
        setSearch("")
    }
    return (
        <div className='relative'>
            <form onSubmit={handleSubmit} className='w-100 flex items-center bg-(--bg-color) rounded-[30px] border border-(--main-color)'>
                <input type="text" name='search' autoComplete='off' placeholder='Search all products' className='h-7.75 w-90 py-1.25 px-7.5 bg-(--bg-color) rounded-[30px] text-sm' onChange={(e) => setSearch(e.target.value)} value={search} />
                <button type='submit' className='h-7.75 w-15 bg-(--main-color) text-[18px] rounded-r-[30px] cursor-pointer '><FaSearch className='m-auto text-(--white-color) text-sm' /></button>
            </form>

            {Suggestion.length > 0 && (
                <ul className="absolute bg-white w-full shadow-md mt-2 rounded">
                    {Suggestion.map((item: ProductType) => (
                        <li key={item.id} className="p-2 flex items-center gap-1 cursor-pointer text-sm" onClick={() => handleUl(item)}>
                            <img src={item.images[0]} className='w-auto h-5'></img> {item.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )




}
