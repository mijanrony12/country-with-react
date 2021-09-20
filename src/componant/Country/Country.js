import React from 'react';
import  './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const {region,population,flag,capital,name}=props.country
    return (
        <div className="country">
            <p className="fw-bolder fst-italic">Region:-{ region}</p>
            <img src={ flag} alt="flag" />
            <h4 style={ { color:'#e056fd'}}>Country Name:-{ name}</h4>
            <h6>Capital:- <span>{capital}</span> and Total Population:- <span>{population} </span></h6>
        </div>
    );
};

export default Country;