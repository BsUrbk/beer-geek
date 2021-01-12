import React, {useState, useEffect} from 'react';
import './Search.scss';

const Search = () => {


    useEffect(() =>{
        fetchBeer();
    }, []);

    const [beers, setBeers] = useState([]);

    const fetchBeer = async () => {
        const data = await fetch('https://api.punkapi.com/v2/beers/16');

        const beers = await data.json();
        console.log(beers);
        setBeers(beers);
    };

   
     

    return ( 
        <div className="beer"> 
                {beers.map(beer =>(
                    
                    <img src={beer.image_url} alt=""/>
                ))}
                
        </div>
     );
}
 
export default Search;