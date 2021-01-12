import React from 'react';
import {Link} from 'react-router-dom';
import beerIcon from './Beer.svg'
import './Nav.scss';

const Nav = () => {
    return ( 
        <nav className="nav">
            <img src={beerIcon} className="beerIcon" alt="beerIcon"/>
            <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Search">Search</Link></li>
                <li><Link to="/random-beer">Random Beer</Link></li>
            </ul>
        </nav>
     );
}
 
export default Nav;

