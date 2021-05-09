import React from 'react';
//Importing evrything Fontawesome related
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faPlay, faPause, faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Player = ({currentSong, setCurrentSong, audioRef, isSongPlaying, setIsSongPlaying, songDetails, setSongDetails}) => {
    /*
        Adding event Listeners
    */
   const playSongHandler = () => {
       console.log(audioRef.current);
       if(isSongPlaying){
        audioRef.current.pause();
        setIsSongPlaying(false)
       } else {
        audioRef.current.play();
        setIsSongPlaying(true);
       }
   }

   /*
    Functions
   */
  const roundUpTime = (time) => {
    return( Math.floor(time / 60) + ':' + ("0" + Math.floor(time % 60)).slice(-2))
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
                <p>{roundUpTime(songDetails.timeStamp)}</p>
                <input 
                    type="range" 
                    min={0}
                    max={songDetails. duration}
                    value={songDetails.timeStamp}
                />
                <p>{roundUpTime(songDetails.duration)}</p>
            </div>
        </div>
    );
}

export default Player;