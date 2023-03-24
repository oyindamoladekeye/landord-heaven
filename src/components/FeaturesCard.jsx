import React from 'react'
import "../styles/featuresCard.scss"

export default function FeaturesCard({img , text ,heading}) {
  return (
    <div className='features-card'>
        <img src={img} alt="" />
        <p>{heading}</p>
        <p>{text}</p>
    </div>
  )
}
