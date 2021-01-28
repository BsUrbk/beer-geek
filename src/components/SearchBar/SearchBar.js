import React, {useState} from 'react';
import './SearchBar.scss'
import searchIcon from '../../assets/images/search.svg';
import _ from 'lodash';
import SearchResults from '../SearchResults/SearchResults.js';

const SearchBar = () => {

    const [query, setQuery] = useState();
    const [beers, setBeers] = useState([]);
    const [beerst, setBeerst] = useState([]);
    
    const newQuery = (e) =>{
        setQuery(e.target.value);
        console.log(e.target.value);
        if(e.target.value == ""){
            console.log("bonk")
            setBeers("");
        }else{
            fetchBeer(e.target.value);
        }
    }

    const fetchBeer = async (term) => {
        const data = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${term}&per_page=8`);

        const beers = await data.json();
        console.log(beers);
        setBeers(beers);
    }
    
    const handleClick = async (id) =>{
        const result = await fetch(`https://api.punkapi.com/v2/beers/${id}`);

        const beerst = await result.json();
        console.log(beerst);
        setBeerst(beerst);
    }



    return ( 
        <div className="SearchBar">
            <input  onChange={_.debounce(newQuery, 300)} type="text" placeholder="Search..."/>
            <img onClick={handleClick} className="searchIcon" src={searchIcon} alt="searchIcon"/>
            <SearchResults handleClick={handleClick} beers={beers}/>
            <div>
                {beerst.map(beert =>(
                    <img src={beert.image_url} alt=""/>
                ))}
            </div>
        </div>
     );
}
 
export default SearchBar;