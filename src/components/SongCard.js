import React from 'react';
//Import everything Fontawesome related
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const SongCard = ({song, currentSong, setCurrentSong, allSongs, setAllSongs, isSongPlaying, audioRef}) => {
/*Let's create all our Event Listeners*/
    const selectSongHandler = async (e) => {
        const newSelectedSong = allSongs.find( stateSong => stateSong.id === song.id);
        await setCurrentSong(newSelectedSong);

        updateActiveSongs(newSelectedSong);

        if(isSongPlaying) { audioRef.current.play();}
    }

    /*Functions */
    const updateActiveSongs = (activeSong) => {
        const newAllSongs = allSongs.map ( stateSong => {
            if(stateSong.id === activeSong.id){
                return {...stateSong, active: true};
            } else {
                return {...stateSong, active: false};
            }
        });
        //Upfate allSongs with new active song
        setAllSongs(newAllSongs);
      }
    return(
        <div 
            onClick={selectSongHandler} 
            className={`song-card ${song.active ? 'active' : ''}`}
        >
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