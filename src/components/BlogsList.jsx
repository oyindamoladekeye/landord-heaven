import React from 'react'
import "../styles/blogslist.scss"

export default function BlogsList({img , date, blogs}) {
  return (
    <div className='blogslist'>
        <div className='bloglist-img'><img src={img} alt="" /></div>
        <div className='bloglist-text'>
            <span>{date}</span>
            <p>{blogs}</p>
        </div>
    </div>
  )
}
