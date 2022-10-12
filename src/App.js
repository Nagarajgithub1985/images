import React from 'react';
import axios from "axios";

//import DisplayItem  from './DisplayItem';
import DisplayItems from './DisplayItems';
//import Modal from './Modal';

class App extends React.Component {
  state = {images: [], qual_imgs: []};

  componentDidMount() {
    // axios.get(
    //   "https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948"
    // ).then(response => {
    //   this.setState({
    //     images: response.data
    //   });
    // });

    axios.get(
      "http://127.0.0.1:8000/quality_test"
    ).then(response => {
      this.setState({
        qual_imgs: response.data
      });
    });
  }

  renderImages() {
    //return this.state.images.map((image) => {
    
      return <DisplayItems items = {this.state.qual_imgs} />
    //});
  }

  render() {
    return (
      <div className="ui divided items">
        {this.renderImages()}
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
