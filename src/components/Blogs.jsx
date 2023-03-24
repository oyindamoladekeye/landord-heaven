import React from 'react'
import "../styles/blogs.scss"
import arrow from "../assets/arrow.png"
import blog1 from "../assets/blogimg1.png"
import BlogsList from './BlogsList'
import blog2 from "../assets/blogimg2.png"
import blog3 from "../assets/blogimg3.png"
import blog4 from "../assets/blogimg4.png"

export default function Blogs() {
  return (
    <div className='blogs-container'>
        <div className='blogs-title'>
            <div className='blogs-heading'>
                <h2>BLOGS</h2>
                <h1>Articles Related to Aesthetic Home Design</h1>
            </div>
            <div className='explore'>
                <p>Explore All Blogs</p>
                <img src={arrow} alt="" />
            </div>
        </div>
        <div className='blogs-post'>
            <div className='blogs-post-1'>
                <img src={blog1} alt="" />
                <span>September 8, 2022</span>
                <h2>You’ll save time and money on trial-and-error decorating</h2>
                <p>We love the flexibility wall decor within this aesthetic. With personalization at its core, 
                    the bohemian aesthetic is...</p>
            </div>
            <div className="blogs-post-2">
    
                <BlogsList img={blog2} date="August 10, 2022" blogs="The modern home aesthetic is a “know it when you see it” style.
                It’s sleek and minimalist, with a loyalty to black and...."/>
                <BlogsList img={blog3} date="August 12, 2022" blogs="Bohemian decor is among the most
                popular home aesthetics. The style is constructed while paying attention to..."/>
                <BlogsList img={blog4} date="September 8, 2022" blogs="We love the flexibility wall deor  within this aesthetic. 
                With personalization at its core, the bohemian..."/>
            </div>
        </div>
    </div>
  )
}
