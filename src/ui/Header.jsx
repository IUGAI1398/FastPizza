import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'

export default function Header() {
  return (
    <header className='bg-yellow-500'>
        <Link to="/">Fast React Pizza Co</Link>
        <SearchOrder/>
        <h3>Aleks</h3>
    </header>
  )
}