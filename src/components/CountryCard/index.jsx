import React from 'react'
import "./countryCard.scss";

const Index = ({country}) => {
    const { flag, name, region } = country;
    return (
        <div className="countryInfo">
            <div className="countryInfo__flag">
                <img src={flag} alt={name} />
            </div>
            <div className="countryInfo__details">
                <h4 className='countryInfo__details--titlle'>{name}</h4>
                <p className='countryInfo__details--subTitle'>{region}</p>
            </div>
        </div>
    )
}

export default Index