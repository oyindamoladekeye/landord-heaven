import React from 'react'
import DetailsDescription from './DetailsDescription'
import "../styles/detailsCard.scss"
import search from "../assets/search.png"

export default function DetailsCard() {
  return (
    <div className='details-cards-container'>
        <DetailsDescription heading="Location" text="Lagos, Nigeria" />
        <DetailsDescription heading="Price" text ="$1,000 to $10,000"/>
        <DetailsDescription heading="Property type" text="Apartment"/>
        <div className='details-cards-search-icon'>
          <img src={search} alt="" />
        </div>
    </div>
  )
}
