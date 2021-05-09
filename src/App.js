import React from 'react';
//Importing our components
import Library from './components/Library';
import Player from './components/Player';
//Import our utility db of songs
import songs from './songs_db';

function App() {
  return (
    <div className="App">
      <Library />
      <Player />
    </div>
  );
}

export default App;
