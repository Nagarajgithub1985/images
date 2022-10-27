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
          <Router history={history}>
            <div>
              <ApplicationBar handleProcessClick={this.onProcessClick} />
              <Route path="/" exact />
              <Route path="/process" component={ProcessImage} />
              <Route path="/history" component={ProductHistory} />
              <Route path="/trained_images" component={TrainedImages} />
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
