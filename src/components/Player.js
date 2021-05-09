import React from 'react';
//Importing evrything Fontawesome related
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faPlay, faPause, faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Player = ({currentSong, setCurrentSong, audioRef}) => {
    /*
        Adding event Listeners
    */
   const playSongHandler = () => {
       console.log(audioRef.current.play);
       audioRef.current.play();
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
                    icon={faPlay}
                    size="4x"
                />
                <FontAwesomeIcon 
                    icon={faAngleRight}
                    size="2x"
                />
            </div>
            <div className="song-info">
                <p>0</p>
                <input type="range" />
                <p>100</p>
            </div>
        </div>
    );
}

export default Player;