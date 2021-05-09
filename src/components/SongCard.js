import React from 'react';
//Import everything Fontawesome related
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const SongCard = ({song}) => {
    return(
        <div className={`song-card ${song.active ? 'active' : ''}`}>
            <img src={song.cover} alt={song.artist} />
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            <FontAwesomeIcon
                className="icon"
                icon={faHeart}
                size="4x" 
            />
        </div>
    );
}

export default SongCard;