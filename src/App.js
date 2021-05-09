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
  return (
    <div className="App">
      <Library 
        allSongs={allSongs}
        setAllSongs={setAllSongs}
      />
      <Player 
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
      />

      <audio 
        ref={audioRef}
        src={currentSong.audio}
      >
      </audio>
      
    </div>
  );
}

export default App;
