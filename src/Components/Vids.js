import React, { Component } from 'react';

class Vids extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div style={{backgroundImage: 'url("https://gdurl.com/mvlO")', backgroundPosition: 'center'}}>
        <div style={{backgroundColor: 'black', opacity: 0.9, paddingTop: 100, paddingBottom: 70}}>
          <div className="container" id="vids" style={{opacity: 1, zIndex: 3}}>
            <h1>Vids</h1>
            <p style={{paddingTop:'20px'}}></p>
            <iframe title="inTheFuture" width="100%" height="315" src="https://www.youtube.com/embed/XLlM3NzrcKU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            <p style={{paddingTop:'20px'}}></p>
            <iframe title="littleRoom2018" width="100%" height="315" src="https://www.youtube.com/embed/MkTeVukUPdw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            <p style={{paddingTop:'20px'}}></p>
            <iframe title="whatIsThis" width="100%" height="315" src="https://www.youtube.com/embed/_bOE20PcIfI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            <p style={{paddingTop:'20px'}}></p>
            <iframe title="nashville" width="100%" height="315" src="https://youtube.com/embed/f9eosD8fNuY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
          </div>
        </div>
      </div>
    )
  }
}

export default Vids


// I like to eat cheese. Sometimes I like to eat cheese.