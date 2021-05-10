import React, {useState, useEffect} from 'react';
//Importing evrything Fontawesome related
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons'

const Nav = ({isFavouritesOpen, setIsFavouriteOpen, allSongs}) => {
    /*
        Let's set our local state. favouritesCounter holds how many
        songs the user liked. 
    */
    const [favouritesCounter, setFavouriteCounter] = useState(0);

    /*
        Let's set our useEffect. useEffect updates our favouritesCounter 
        whenever a new song is liked by the user.
    */
    useEffect( () => {
        const favouriteSongsCounter = allSongs.filter( song => song.favourite === true);
        setFavouriteCounter(favouriteSongsCounter.length)
    }, [allSongs]);

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
            <button 
                onClick={toggleHandler}
            >
                <FontAwesomeIcon icon={faMusic} />
                <span>Favourites</span>
                <span className="favourites-counter">
                    {favouritesCounter}
                </span>
            </button>
        </nav>
    );
}

export default Nav;