import React from 'react';
import './Countries.css'
import { useState, useEffect} from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [ countries, setcountries ] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
        .then(data=> setcountries(data))
    }, [])
    
    return (
        <div >
            <h1>Available Country in the world:- <span>{ countries.length }</span></h1>
            <div className="countries">
                 {
                countries.map(country => <Country
                    key={country.alpha3Code}
                    country={ country }
                ></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;