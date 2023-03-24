import React from 'react'
import homeIcon from '../assets/home-icon.png'
import "../styles/detailsDescription.scss"

export default function DetailsDescription({heading , text}) {
  return (
    <div className='details-description-container'>
        <div>
            <img src={homeIcon} alt="" />
        </div>
        <div className='details-description-side'>
            <p>{heading}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}
