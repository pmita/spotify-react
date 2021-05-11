import React from 'react';
//Let's import our components
import FavouriteCard from './FavouriteCard';

const Favourites = ({isFavouritesOpen, allSongs}) => {
    return(
        <div className={`favourites ${isFavouritesOpen ? "active" : ""}`}>
            <h2>Your Favourites</h2>
            {allSongs.map( song => {
                if(song.favourite){ 
                    return(
                        <FavouriteCard 
                            song={song} 
                            key={song.id}
                        />
                    );
                } else {
                    return;
                }
                
            })}
        </div>
    );
}

export default Favourites;