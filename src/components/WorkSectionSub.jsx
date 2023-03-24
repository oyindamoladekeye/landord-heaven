import React from 'react'
import "../styles/workSectionSub.scss"

export default function WorkSectionSub({img , heading , text}) {
  return (
    <div className='work-section-sub'>
        <div className='work-section-icons'>
            <img src={img} alt="" />
        </div>
        <div className='testimony'>
            <p>{heading}</p>
            <p>{text}</p>
        </div> 
    </div>
  )
}
