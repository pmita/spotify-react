import React, {useState} from 'react';
//Importing our components
import Library from './components/Library';
import Player from './components/Player';
//Import our utility db of songs
import songs from './songs_db';

function App() {
  /*
    Let's setup our State
  */
 const [allSongs, setAllSongs] = useState(songs);
  return (
    <div className="App">
      <Library 
        allSongs={allSongs}
        setAllSongs={setAllSongs}
      />
      <Player />
    </div>
  );
}

export default App;
