import React, { Component } from 'react';

class Merch extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div style={{backgroundImage: 'url("https://gdurl.com/MrJH")', backgroundPosition: 'center'}}>
        <div style={{backgroundColor: 'black', opacity: 0.85, paddingTop: 100, paddingBottom: 70}}>
          <div className="container" id="merch" style={{paddingBottom: '70px'}}>
            <h1>Merch</h1><p><i><a href="https://blindtigermerch.square.site/s/shop">CLICK HERE TO VISIT THE TIGER STORE</a></i></p>
            <p></p><p></p><p></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Merch