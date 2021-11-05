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
      <div style={{backgroundImage: 'url("https://gdurl.com/hGJK")', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
        <div style={{backgroundColor: "rgba(0, 0, 0, .8)", paddingTop: 100, paddingBottom: 70}}>
          <div className="container" id="vids" style={{opacity: 1, zIndex: 3}}>
            <h1>Vids</h1>
            <p style={{paddingTop:'20px'}}></p>
            <iframe title="atlanta" width="80%" height="450" src="https://www.youtube.com/embed/iULZAG5_-iE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            <p style={{paddingTop:'20px'}}></p>
            <iframe title="vero beach" width="80%" height="450" src="https://www.youtube.com/embed/t5alBo79PQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            {/* <p style={{paddingTop:'20px'}}></p>
            <iframe title="inTheFuture" width="100%" height="315" src="https://www.youtube.com/embed/XLlM3NzrcKU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            <p style={{paddingTop:'20px'}}></p>
            <iframe title="other" width="100%" height="315" src="https://www.youtube.com/embed/O2l64tw71Rk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            <p style={{paddingTop:'20px'}}></p>
            <iframe title="thatonegun" width="100%" height="315" src="https://www.youtube.com/embed/PWpv0sTZ8RY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            <p style={{paddingTop:'20px'}}></p>
            <iframe title="live" width="100%" height="315" src="https://www.youtube.com/embed/ntAIuBVmMR4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Vids


// I like to eat cheese. Sometimes I like to eat cheese.