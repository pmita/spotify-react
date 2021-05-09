import React from 'react';
//Importing evrything Fontawesome related
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faPlay, faPause, faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Player = ({currentSong, setCurrentSong, audioRef, isSongPlaying, setIsSongPlaying, songDetails, setSongDetails, allSongs, setAllSongs}) => {
    /*Adding event Listeners*/
   const playSongHandler = () => {
       if(isSongPlaying){
        audioRef.current.pause();
        setIsSongPlaying(false)
       } else {
        audioRef.current.play();
        setIsSongPlaying(true);
       }
   }

   const changeSongHandler = async (skipDirection) => {
    const songIndex = allSongs.findIndex( stateSong => stateSong.id === currentSong.id);
    //If user clicks next song increase the index of the allSongs array (maximum is allSongs.length)
    if(skipDirection === 'next-song'){
        await setCurrentSong(allSongs[(songIndex + 1) % allSongs.length]);
        updateActiveSongs(allSongs[(songIndex + 1) % allSongs.length]);
    }
    //If user click previous song decrease the index of the allSong array (minimum is allSongs[0])
    if(skipDirection === 'previous-song'){
        if((songIndex - 1) === -1){
            await setCurrentSong(allSongs[allSongs.length - 1]);
            return;
        }
        await setCurrentSong(allSongs[(songIndex - 1) % allSongs.length]);
        updateActiveSongs(allSongs[(songIndex - 1) % allSongs.length]);
    }

    if(isSongPlaying){audioRef.current.play();}    
   }

   const updateTimeStampHandler = (e) => {
    const newTimeStamp = e.target.value
    setSongDetails({...songDetails, timeStamp: newTimeStamp});
    audioRef.current.currentTime = newTimeStamp;
   }

   /*Let's set our Functions*/
  const roundUpTime = (time) => {
    return( Math.floor(time / 60) + ':' + ("0" + Math.floor(time % 60)).slice(-2))
  }

  const updateActiveSongs = (activeSong) => {
    const newAllSongs = allSongs.map ( song => {
        if(song.id === activeSong.id){
            return {...song, active: true}; //change current song to active
        } else {
            return {...song, active: false}; //if no match, set to false 
        }
    });
    setAllSongs(newAllSongs); ////reset allSongs array with active
  }

    return(
        <div className="player">
            <div className="controls">
                <FontAwesomeIcon 
                    icon={faAngleLeft}
                    size="2x"
                    onClick={() => changeSongHandler('previous-song')}
                />
                <FontAwesomeIcon 
                    onClick = {playSongHandler}
                    className="play-icon"
                    icon={isSongPlaying ? faPause : faPlay}
                    size="4x"
                />
                <FontAwesomeIcon 
                    icon={faAngleRight}
                    size="2x"
                    onClick={() => changeSongHandler('next-song')}
                />
            </div>
            <div className="song-info">
                <p>{roundUpTime(songDetails.timeStamp)}</p>
                <input 
                    type="range" 
                    min={0}
                    max={songDetails.duration || 0}
                    value={songDetails.timeStamp}
                    onChange={updateTimeStampHandler}
                />
                <p>{roundUpTime(songDetails.duration)}</p>
            </div>
        </div>
    );
}

export default Player;