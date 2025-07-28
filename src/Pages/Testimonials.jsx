import React from 'react'
import PageTitle from '../Components/PageTitle'
import HeroImage from '../assets/images/testimonials-hero.png'
import TestimonailCards from '../Components/testimonial-cards/TestimonailCards'
import ViewMoreButton from '../Components/buttons/ViewMoreButton'

function Testimonials() {
    return (
        <div className='page-wrapper'>
            <PageTitle
                tag="Testimonials"
                title="What Our Client Say"
                subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                imageSrc={HeroImage}
                imageAlt="Healthcare and Commercial Electrical Services"
            />
            <TestimonailCards />
            <div className='flex justify-center'>
                <ViewMoreButton />
            </div>
        </div>
    )
}

export default Testimonials
