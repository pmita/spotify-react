import React from 'react';
//Importing evrything Fontawesome related
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons'

const Nav = ({isFavouritesOpen, setIsFavouriteOpen}) => {
    /*Let's setup our events*/
    const toggleHandler = () => {
        console.log('it works')
        if(!isFavouritesOpen){
            setIsFavouriteOpen(true);
        } else {
            setIsFavouriteOpen(false);
        }
      }
    return(
        <nav className={`nav ${isFavouritesOpen ? "active" : ''}`}>
            <h2>Musico.co</h2>
            <button onClick={toggleHandler}>
                <FontAwesomeIcon icon={faMusic} />
                <span>Favourites</span>
            </button>
        </nav>
    );
}

export default Nav;