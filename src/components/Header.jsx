import React from 'react'
import '../styles/header.scss'
import DetailsCard from './DetailsCard'

export default function Header() {
  return (
    <header className='header'>
        <div className='header-container'>
            <h1 className='discover'>Discover a place you will love to live</h1>
            <p className='connect'>Connect with more than 75 million renters looking for new homes using our comprehensive marketing platform</p>
            <DetailsCard />
        </div>
    </header>
  )
}
