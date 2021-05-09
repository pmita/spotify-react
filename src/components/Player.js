import React from 'react';
//Importing evrything Fontawesome related
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faPlay, faPause, faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Player = ({currentSong, setCurrentSong, audioRef, isSongPlaying, setIsSongPlaying, songDetails, setSongDetails}) => {
    /*
        Adding event Listeners
    */
   const playSongHandler = () => {
       if(isSongPlaying){
        audioRef.current.pause();
        setIsSongPlaying(false)
       } else {
        audioRef.current.play();
        setIsSongPlaying(true);
       }
   }
    return(
        <div className="player">
            <div className="controls">
                <FontAwesomeIcon 
                    icon={faAngleLeft}
                    size="2x"
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
                />
            </div>
            <div className="song-info">
                <p>{songDetails.timeStamp}</p>
                <input 
                    type="range" 
                    min={0}
                    max={songDetails. duration}
                />
                <p>{songDetails. duration}</p>
            </div>
        </div>
    );
}

export default Player;