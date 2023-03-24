import React from 'react'
import WorkSection from './WorkSection'
import "../styles/features.scss"
import FeaturesCard from './FeaturesCard'
import img1 from "../assets/featureimg1.png"
import img2 from "../assets/featureimg2.png"
import img3 from "../assets/featureimg3.png"

export default function Features() {
  return (
    <div className='features'>
        <WorkSection />
        <section>
            <h2>WHY CHOOSE LANDLORD HEAVEN</h2>
            <div className='features-text'>
                <h1>We Provides the most complete list of property</h1>
                <p>Find the ideal property that is most suitable for you. 
                    Starting from houses and apartments that are moderate to those that are exclusive</p>
            </div>
        </section>
        <div className="features-cards">
            <FeaturesCard  img={img1} heading ="Find your dream house" text ="Lorem ipsum dolor sitamet,
            consectetur adipiscing elit. Quisquesit amet malesuada sit suscipittempor et. Eu, eget natoque non "/>
            <FeaturesCard  img={img2} heading ="Find place of business" text ="Lorem ipsum dolor sitamet,
            consectetur adipiscing elit. Quisquesit amet malesuada sit suscipittempor et. Eu, eget natoque non "/>
            <FeaturesCard  img={img3} heading ="Smart feature rich" text ="Lorem ipsum dolor sitamet,
            consectetur adipiscing elit. Quisquesit amet malesuada sit suscipittempor et. Eu, eget natoque non "/>
        </div>
    </div>
  )
}
