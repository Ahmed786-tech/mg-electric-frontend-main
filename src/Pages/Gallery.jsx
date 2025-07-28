import React from 'react'
import PageTitle from '../Components/PageTitle'
import HeroImage from "../assets/images/gallery-hero.png"
import { Banner } from '../Components/gallery-banner/hero/Banner'
import { ImageGallery } from '../Components/gallery-images/gallery/ImageGallery'

function Gallery() {
    return (
        <div className=''>
            <PageTitle
                tag="Gallery"
                title="Our Projects Showcase"
                subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                imageSrc={HeroImage}
                imageAlt="Healthcare and Commercial Electrical Services"
            />
            <ImageGallery />
            <Banner />
        </div>
    )
}

export default Gallery
