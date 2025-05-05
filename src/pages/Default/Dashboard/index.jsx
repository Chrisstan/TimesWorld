import React, { useEffect } from 'react'
import "./dashboard.scss";
import { useLocation } from 'react-router-dom';

import useCountries from '../../../hooks/useCountries';
import CountryCard from '../../../components/CountryCard';
import HeroCarousal from '../../../components/HeroCarousal';

import CompassImg from '../../../assets/images/compass.jpg';

const Index = () => {
    const { visibleCountries, filteredCountries, filterByContinent, loadMoreCountries, status, error } = useCountries();
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const continent = searchParams.get('continent') || 'all';
        filterByContinent(continent); // Apply the filter based on the query param
    }, [location.search]);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'failed') {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="container">
            <div className='dash-wrapper'>
                <div className="dash-wrapper__titleSec">
                    <h1 className='dash-wrapper__titleSec--title'>Welcome</h1>
                </div>
                <div className="dash-wrapper__heroSec">
                    <div className="carouselSec">
                        <HeroCarousal />
                    </div>
                    <div className="imageSec">
                        <img src={CompassImg} alt="" />
                    </div>
                </div>
                <div className="dash-wrapper__contentSec">
                    {visibleCountries.map((country, i) => (
                        <CountryCard key={i} country={country} />
                    ))}
                </div>
                {visibleCountries?.length < filteredCountries?.length && 
                    <div className="dash-wrapper__loadMore">
                        <button className="loadMoreButton" onClick={loadMoreCountries}>
                            Load More
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Index