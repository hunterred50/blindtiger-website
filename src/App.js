import React, { Component } from 'react';
import Menu from './Components/Menu';
import Hero from './Components/Hero';
// import PictureWheel from './Components/PictureWheel';
import Music from './Components/Music';
import Vids from './Components/Vids'
import Tour from './Components/Tour';
import Merch from './Components/Merch';
// import Chat from './Components/Chat';
import Footer from './Components/Footer';
import './App.css';
import { BreakpointProvider } from 'react-socks'

class App extends Component {
  render() {
    return (
      <div className="App" id="home">
        <BreakpointProvider>
          <Menu />
          <Hero />
          <Music />
          <Vids />
          <Tour />
          <Merch />
          {/* <Chat /> */}
          <Footer />
        </BreakpointProvider>
      </div>
    );
  }
}

export default App;
