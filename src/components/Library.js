import React from 'react';
//Importing components
import SongCard from './SongCard';

const Library = ({allSongs, setAllSongs}) => {
    return(
        <div className="library">
            {allSongs.map( song => {
                return(
                    <SongCard song={song} key={song.id}/>
                );
            })}
        </div>
    );
}

export default Library;