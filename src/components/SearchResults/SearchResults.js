import React from 'react';
import './SearchResults.scss';

const SearchResults = ({ beers, handleClick }) => {

    //const beers = props.beers;

    return ( 
        <div className="beers">
            <ul>
                {beers.map(beer =>(
                    
                    <li key={beer.id} onClick={() => handleClick(beer.id)}>{beer.name}</li>
                ))}
            </ul>
        </div>
     );
}
 
export default SearchResults;