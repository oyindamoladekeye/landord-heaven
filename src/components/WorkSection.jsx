import React from 'react'
import WorkSectionSub from './WorkSectionSub'
import home from "../assets/darkhome-icon.png"
import people from "../assets/people-icon.png"
import key from "../assets/key-icon.png"
import award from "../assets/award-icon.png"
import "../styles/workSection.scss"

export default function WorkSection() {
  return (
    <div className='work-section'>
        <WorkSectionSub img={home} heading="140,000+" text="Home listing available"/>
        <WorkSectionSub img={people} heading="1K" text="Visitors each month"/>
        <WorkSectionSub img={key} heading="$ 187,50" text="Average buyer savings"/>
        <WorkSectionSub img={award} heading="#1" text="Resource for housing info"/>
    </div>
  )
}
