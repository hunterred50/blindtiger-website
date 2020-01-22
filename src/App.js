import React from 'react';
import Menu from './Components/Menu';
import PictureWheel from './Components/PictureWheel';
import Music from './Components/Music';
import Vids from './Components/Vids'
import Tour from './Components/Tour';
import Merch from './Components/Merch';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" id="home">
      <Menu />
      <PictureWheel />
      <Music />
      <Vids />
      <Tour />
      <Merch />
    </div>
  );
}

export default App;
