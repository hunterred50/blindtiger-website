import React from 'react';
import Menu from './Components/Menu';
import PictureWheel from './Components/PictureWheel';
import Music from './Components/Music';
import Tour from './Components/Tour';
import './App.css';

function App() {
  return (
    <div className="App" id="home">
      <Menu />
      <PictureWheel />
      <Music />
      <Tour />
    </div>
  );
}

export default App;
