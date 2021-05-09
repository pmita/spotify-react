import React from 'react';

const FavouriteCard = ({song}) => {
    return(
        <div className="favourite-card">
            <img src={song.cover} alt={song.artist} />
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
        </div>
    );
}

export default FavouriteCard;