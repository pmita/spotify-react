import React from 'react';
//Importing components
import SongCard from './SongCard';

const Library = ({allSongs, setAllSongs, currentSong, setCurrentSong, isSongPlaying, audioRef}) => {
    return(
        <div className="library">
            {allSongs.map( song => {
                return(
                    <SongCard 
                        song={song} 
                        key={song.id}
                        currentSong={currentSong}
                        setCurrentSong={setCurrentSong}
                        allSongs={allSongs}
                        setAllSongs={setAllSongs}
                        isSongPlaying={isSongPlaying}
                        audioRef={audioRef}
                    />
                );
            })}
        </div>
    );
}

export default Library;