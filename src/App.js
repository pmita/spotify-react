import React, {useState, useRef} from 'react';
//Importing our components
import Library from './components/Library';
import Player from './components/Player';
//Import our utility db of songs
import songs from './songs_db';

function App() {
  /*
    Let's setup our html reference
  */
 const audioRef = useRef(null);
  /*
    Let's setup our State
  */
 const [allSongs, setAllSongs] = useState(songs);
 const [currentSong, setCurrentSong] = useState(allSongs[0]);
 const [isSongPlaying, setIsSongPlaying] = useState(false);
 const [songDetails, setSongDetails] = useState(
   {
     timeStamp: 0,
     duration: 0
   }
 );

 /*
   Let's setup our events
 */
const updateTimeStampHandler = (e) =>{
  setSongDetails(
    {...songDetails, timeStamp: e.target.currentTime, duration: e.target.duration}
  );
}

  return (
    <div className="App">
      <Library 
        allSongs={allSongs}
        setAllSongs={setAllSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isSongPlaying={isSongPlaying}
        audioRef={audioRef}
      />
      <Player 
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isSongPlaying={isSongPlaying}
        setIsSongPlaying={setIsSongPlaying}
        songDetails={songDetails}
        setSongDetails={setSongDetails}
        allSongs={allSongs}
        setAllSongs={setAllSongs}
      />

      <audio 
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={updateTimeStampHandler}
        onLoadedMetadata={updateTimeStampHandler}
      >
      </audio>
      
    </div>
  );
}

export default App;
