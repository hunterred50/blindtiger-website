import React, { Component } from 'react';
import { Breakpoint } from 'react-socks'
// import Transition from 'react-bootstrap/Transition';

class Music extends Component {
  render() {
    return (
      // <Transition>
      <div>
      <Breakpoint medium up>
      <div style={{backgroundImage: 'url("https://gdurl.com/hGJK")', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}/*style={{backgroundImage: 'url("https://gdurl.com/tl3V")', backgroundPosition: 'center right', objectPosition: "5em 5em", backgroundAttachment: 'fixed'}}*/>
        <div style={{backgroundColor: "rgba(0, 0, 0, .8)", paddingTop: 100, paddingBottom: 70}}>
          <div className="container" id="music" style={{opacity: 1}}>
            <h1>Music</h1><p></p>
            <iframe title="self-titled" src="https://open.spotify.com/embed/album/434KFBXpZD9GcOi4PjP3my" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <p></p><p></p>
            <iframe title="Lock the Gate" src="https://open.spotify.com/embed/album/2K8GFA0sQhnHFAZQxvgDeF" width="100%" height="390" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <p></p><p></p>
            <iframe title="Waterfall" src="https://open.spotify.com/embed/album/2QZUdZ6SubPpVqcCfxZLTd" width="100%" height="235" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        </div>
      </div>
      </Breakpoint>
      <Breakpoint small down>
      <div style={{backgroundImage: 'url("https://gdurl.com/hGJK")', backgroundPosition: 'center', backgroundAttachment: 'initial'}}/*style={{backgroundImage: 'url("https://gdurl.com/tl3V")', backgroundPosition: 'center right', objectPosition: "5em 5em", backgroundAttachment: 'fixed'}}*/>
        <div style={{backgroundColor: 'black', opacity: 0.8, paddingTop: 100, paddingBottom: 70}}>
          <div className="container" id="music" style={{opacity: 1}}>
            <h1>Music</h1><p></p>
            <iframe title="Lock the Gate" src="https://open.spotify.com/embed/album/2K8GFA0sQhnHFAZQxvgDeF" width="100%" height="390" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <p></p><p></p>
            <iframe title="Waterfall" src="https://open.spotify.com/embed/album/2QZUdZ6SubPpVqcCfxZLTd" width="100%" height="235" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        </div>
      </div>
      </Breakpoint>
      </div>
      // </Transition>
    )
  }
}

export default Music