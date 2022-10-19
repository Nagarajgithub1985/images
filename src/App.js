import React from 'react';
import axios from "axios"

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


import DisplayItems from './DisplayItems';
import ApplicationBar from './AppBar';
import CircularProgressShow from './CircularProgressShow';

class App extends React.Component {
  state = {images: [], qual_imgs: [], processBtnClicked: false};

  onProcessClick = () => {
    this.setState({
      processBtnClicked: true
    });

    axios.get(
      "http://127.0.0.1:8000/quality_test"
    ).then(response => {
      this.setState({
        qual_imgs: response.data
      });
    });
  }

  renderImages() {
      return <DisplayItems items = {this.state.qual_imgs} />
  }

  render() {
     return (
       <div className="">
         <ApplicationBar handleProcessClick={this.onProcessClick} />
         <div style={{marginTop: '9000px;'}}>&nbsp;</div>
         <div style={{marginBottom: '9000px;'}}>&nbsp;</div>
         {this.state.qual_imgs.length > 0 ? this.renderImages() :
            (this.state.processBtnClicked ? <CircularProgressShow /> : null)}
       </div>
     );
  }
}

export default App;
