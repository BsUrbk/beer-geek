import React, {useState, useEffect} from 'react';
import './Search.scss';
import SearchBar from '../../components/SearchBar/SearchBar.js';

const Search = () => {


    useEffect(() =>{
        fetchBeer();
    }, []);

    const [beers, setBeers] = useState([]);


    const fetchBeer = async () => {
        const data = await fetch('https://api.punkapi.com/v2/beers/5');

        const beers = await data.json();
        console.log(beers);
        setBeers(beers);
    };

   
     

    return ( 
        <div className="box">
        <div className="beer"> 
                {beers.map(beer =>(
                    
                    <img src={beer.image_url} alt=""/>
                ))}
                <SearchBar />
        </div>
        </div>
     );
}
 
export default Search;
