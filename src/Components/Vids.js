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
      <div className="container" id="vids" style={{paddingBottom: '70px'}}>
        <h1>Vids</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XLlM3NzrcKU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </div>
    )
  }
}

export default Vids


// I like to eat cheese. Sometimes I like to eat cheese.