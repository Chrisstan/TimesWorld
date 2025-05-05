import React from 'react'
import "./HeroCarousal.scss";

import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';

const Index = () => {
    const {visibleCountries} = useSelector((state) => state.countries)
    return (
        <Carousel className="carouselContainer" indicators={true} variant='dark'>
            {visibleCountries?.slice(0, 10)?.map((country, i) => (
                <Carousel.Item key={i} interval={3000} className='carousalItem'>
                    <img
                        className="d-block w-100"
                        src={country.flag}
                        alt={`${country.name} flag`}
                        style={{ height: '100%', objectFit: 'contain' }}
                    />
                    <Carousel.Caption className="carouselCaption">
                        <h3 className='carouselCaption__title'>{country.name}</h3>
                        <p className='carouselCaption__subTitle'>{country.region}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default Index