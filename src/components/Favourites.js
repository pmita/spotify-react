import React from 'react';
//Let's import our components
import FavouriteCard from './FavouriteCard';

const Favourites = ({isFavouritesOpen, favouriteSongs, setIsFavouriteOpen}) => {
    return(
        <div className={`favourites ${isFavouritesOpen ? "active" : ""}`}>
            <h2>Your Favourites</h2>
            {favouriteSongs.map( song => {
                return(
                    <FavouriteCard 
                        song={song} 
                        key={song.id}/>
                );
            })}
        </div>
    );
}

export default Favourites;