import React from 'react';
//Let's import our components
import FavouriteCard from './FavouriteCard';

const Favourites = ({isFavouritesOpen, favouriteSongs, setIsFavouriteOpen}) => {
    return(
        <div className={`favourites ${isFavouritesOpen ? "active" : ""}`}>
            {favouriteSongs.map( song => {
                return(
                    <FavouriteCard song={song} />
                );
            })}
        </div>
    );
}

export default Favourites;