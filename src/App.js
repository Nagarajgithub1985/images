import React from 'react';
import axios from "axios";

import DisplayItem  from './DisplayItem';
import Modal from './Modal';

class App extends React.Component {
  state = {images: []};

  componentDidMount() {
    axios.get(
      "https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948"
    ).then(response => {
      this.setState({
        images: response.data
      });
    });
  }

  renderImages() {
    return this.state.images.map((image) => {
      return <DisplayItem item = {image} />
    });
  }

  render() {
    return (
      <div className="ui divided items">
        
        {this.renderImages()}<Modal />
      </div>
    );
  }
}

export default App;
