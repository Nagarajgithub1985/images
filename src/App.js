import React from 'react';
import axios from "axios"
import { Router, Route } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import DisplayItems from './DisplayItems';
import ApplicationBar from './AppBar';
import CircularProgressShow from './CircularProgressShow';
import ProcessImage from './component/Routes/ProcessImage';
import ProductHistory from './component/Routes/ProductsHistory';
import TrainedImages from './component/Routes/TrainedImages';
import history from './component/History';
import Home from './component/Home';
import MUIAppBar from './component/MUIAppBar.js';

class App extends React.Component {
  state = {images: [], qual_imgs: [], drawerBtnClicked: true};

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

  handleDrawerClick = (sts) => {
    this.setState({
      drawerBtnClicked: sts
    });
  }

  render() {
    const contentStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };

    if (this.state.drawerBtnClicked) {
      contentStyle.marginLeft = 140;
    }
    else {
      contentStyle.marginLeft = 0;
    }
    console.log(contentStyle);
     return (
      
       <div style={contentStyle}>
          <Router history={history}>
            <div>
              {/* <ApplicationBar handleProcessClick={this.onProcessClick} /> */}
              <MUIAppBar handleDrawerClick={this.handleDrawerClick} />
              <Route path="/" exact component={Home} />
              <Route path="/process" exact component={ProcessImage} />
              <Route path="/history" exact component={ProductHistory} />
              <Route path="/trained_images" exact component={TrainedImages} />
              <Route path="/home" exact component={Home} />
            </div>
            
            {/* <div style={{marginTop: '9000px;'}}>&nbsp;</div>
            <div style={{marginBottom: '9000px;'}}>&nbsp;</div> */}
            {this.state.qual_imgs.length > 0 ? this.renderImages() :
                (this.state.processBtnClicked ? <CircularProgressShow /> : null)}
          </Router>
       </div>
     );
  }
}

export default App;
