import React from 'react'
import PageTitle from '../../Components/PageTitle'
import HeroImage from "../../assets/images/aboutus-hero.png"
import { CompanyOverview } from '../../Components/about-us-overview/overview/CompanyOverview'
import TeamCarousel from '../../Components/about-us-team/teamCarousel/TeamCarousel'
import { ApproachSection } from '../../Components/about-us-approach/approach/ApproachSection'
import { AccreditationsSection } from '../../Components/about-us-banner/accreditations/AccreditationsSection'

function AboutUs() {
    return (
        <div className=''>
            <PageTitle
                tag="About Us"
                title="A Family Tradition of Electrical Excellence"
                subtitle="For generations, the family behind MG Electrics Ltd has been dedicated to providing exceptional electrical services."
                imageSrc={HeroImage}
                imageAlt="Healthcare and Commercial Electrical Services"
            />
            <CompanyOverview />
            <TeamCarousel />
            <ApproachSection />
            <AccreditationsSection />

        </div>
    )
}

export default AboutUs
