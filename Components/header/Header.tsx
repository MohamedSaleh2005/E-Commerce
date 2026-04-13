import React from 'react'
import TopHeader from './TopHeader'
import BottomHeader from './BottomHeader'

export default function Header() {
  return (
    <header className='z-20 fixed top-0 right-0 left-0 bg-(--white-color)'>
        <TopHeader/>
        <BottomHeader/>
    </header>
  )
}
