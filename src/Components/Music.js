import React, { Component } from 'react';
// import Transition from 'react-bootstrap/Transition';

class Music extends Component {
  render() {
    return (
      // <Transition>
      <div className="container" id="music"style={{paddingTop: '70px'}}>
        <h1>Music</h1><p></p>
        <iframe title="Lock the Gate" src="https://open.spotify.com/embed/album/2K8GFA0sQhnHFAZQxvgDeF" width="100%" height="390" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <p></p><p></p>
        <iframe title="Waterfall" src="https://open.spotify.com/embed/album/2QZUdZ6SubPpVqcCfxZLTd" width="100%" height="235" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      // </Transition>
    )
  }
}

export default Music