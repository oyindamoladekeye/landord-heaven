import React from 'react'
import "../styles/properties.scss"
import arrow from "../assets/arrow.png"
import { PropertiesList } from './PropertiesList'
import bedroom from "../assets/home-icon-small.png"
import bathroom from "../assets/bathroom-icon.png"

export default function Properties() {
    const lists = PropertiesList.map(properties =>
        <li key ={properties.id}>
            <img src={properties.img} className="properties-img"/> 
            <div className='properties-badge'>
                <p>{properties.type}</p>
                <p>{properties.state}</p>
            </div>
            <h3>{properties.price}</h3>
            <h1>{properties.location}</h1>
            <div className='properties-icons'>
                <div>
                    <img src ={bedroom} alt="" />
                    <p>{properties.bedroom}</p>
                </div>
                <div>
                    <img src ={bathroom} alt="" />
                    <p>{properties.bathroom}</p>
                </div>
            </div>
        </li>
        )
  return (
    <div className='properties-container'>
        <div className='properties-title'>
            <div className='properties-heading'>
                <h2>PROPERTIES</h2>
                <h1>Properties in Cities and Locations in Nigeria</h1>
            </div>
            <div className='explore'>
                <p>Explore All Properties</p>
                <img src={arrow} alt="" />
            </div>
        </div>
        <ul>
            {lists}
        </ul>
    </div>
  )
}
