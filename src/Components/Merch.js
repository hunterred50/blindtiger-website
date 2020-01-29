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
      <div className="container" id="merch" style={{paddingBottom: '70px'}}>
        <h1>Merch</h1><p><i><a href="https://blindtigermerch.square.site/s/shop">CLICK HERE TO VISIT THE TIGER STORE</a></i></p>
        <p></p><p></p><p></p>
      </div>
    )
  }
}

export default Merch