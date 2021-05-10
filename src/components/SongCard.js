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

    /*Let's create our Functions */
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

      const updateFavouritesHandler = () => {
        const newFavouritesSongs = allSongs.map ( stateSong => {
            if(stateSong.id === song.id){
                if(song.favourite === true){
                    return{...stateSong, favourite: false}
                } else {
                    return {...stateSong, favourite: true}
                }
            } else {
                return {...stateSong};
            }
        });
        
        setAllSongs(newFavouritesSongs);
      }
    return(
        <div 
        /*
            Events bubbling prevents us from clicking on the heart icon. As
            such we need to change the onClick event to our img instead of our div.
            Essentially the user needs to click on the img for them to change the song!
        */
        
            className={`song-card ${song.active ? 'active' : ''} ${song.favourite ? 'favourite' : ''}`}
        >
            <img 
                onClick={selectSongHandler}
                src={song.cover} 
                alt={song.artist} 
            />
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            <FontAwesomeIcon
                className="icon"
                icon={faHeart}
                size="4x" 
                onClick={updateFavouritesHandler}
            />
        </div>
    );
}

export default SongCard;