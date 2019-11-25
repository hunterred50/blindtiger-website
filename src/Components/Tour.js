import React, { Component } from 'react';
// import Table from 'react-bootstrap/Table';
// import Tabletop from 'tabletop';

class Tour extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "//widget.songkick.com/2215011/widget.js";
    script.async = true;

    document.body.appendChild(script);
  //   Tabletop.init({
  //     key: 'https://docs.google.com/spreadsheets/d/1o84bib3eyPwb_1GNDYvIJ0OkBB2rbk6-rfw9YquS3ys/edit?usp=sharing',
  //     callback: googleData => {
  //       this.setState({
  //         data: googleData
  //       })
  //     },
  //     simpleSheet: true
  //   })
  }
  render() {
    // const { data } = this.state
    // console.log('updated state --->', this.state)
    return (
      // <div className="container" id="tour">
      //   <h1 margin-bottom="2em">Upcoming Shows</h1><p></p>
      //   <Table className="tabl" hover bordered responsive variant="dark">
      //     <tbody>
      //         {
      //           data.map(obj => {
      //             return (
      //               <div key={obj.DATE}>
      //                 <tr>
      //                   <td>{obj.DATE}</td>
      //                   <td>{obj.CITY}</td>
      //                   <td>{obj.TITLE}</td>
      //                   <td>{obj.VENUE}</td>
      //                 </tr>
      //               </div>
      //             )
      //           })
      //         }
      //     </tbody>
      //   </Table>
      // </div>
      <div className="container">
        <h1>Tour</h1><p></p>
        <a href="https://www.songkick.com/artists/2215011-blind-tiger" class="songkick-widget" data-theme="light" data-track-button="on" data-detect-style="true" data-font-color="#ffffff" data-background-color="#3b3b3b" data-locale="en">Blind Tiger tour dates</a>
        <p></p>
      </div>
    )
  }
}

export default Tour