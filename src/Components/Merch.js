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
      <div className="container" id="merch" style={{paddingBottom: '50px'}}>
        <h1>Merch</h1><p><i>coming soon...</i></p>
        <p></p><p></p><p></p>
      </div>
    )
  }
}

export default Merch