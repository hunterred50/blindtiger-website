import React, { Component } from 'react';
// import Transition from 'react-bootstrap/Transition';

class Music extends Component {
  render() {
    return (
      // <Transition>
      <div style={{backgroundImage: 'url("https://gdurl.com/tl3V")', backgroundPosition: 'center', objectPosition: "70% 10%"}}>
        <div style={{backgroundColor: 'black', opacity: 0.75, paddingTop: 100, paddingBottom: 70}}>
          <div className="container" id="music" style={{opacity: 1}}>
            <h1>Music</h1><p></p>
            <iframe title="Lock the Gate" src="https://open.spotify.com/embed/album/2K8GFA0sQhnHFAZQxvgDeF" width="100%" height="390" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <p></p><p></p>
            <iframe title="Waterfall" src="https://open.spotify.com/embed/album/2QZUdZ6SubPpVqcCfxZLTd" width="100%" height="235" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        </div>
      </div>
      // </Transition>
    )
  }
}

export default Music