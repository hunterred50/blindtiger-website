import React, { Component } from 'react';
import Menu from './Components/Menu';
import PictureWheel from './Components/PictureWheel';
import Music from './Components/Music';
import Vids from './Components/Vids'
import Tour from './Components/Tour';
import Merch from './Components/Merch';
import Chat from './Components/Chat';
import './App.css';
import { Breakpoint, BreakpointProvider } from 'react-socks'

class App extends Component {
  render() {
    return (
      <div className="App" id="home">
        <BreakpointProvider>
          <Menu />
          <PictureWheel />
          <Music />
        </BreakpointProvider>
        <Vids />
        <Tour />
        <Merch />
        <Chat />
      </div>
    );
  }
}

export default App;
