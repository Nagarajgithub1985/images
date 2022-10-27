import React from 'react';
import axios from 'axios';

import CircularProgressShow from '../../CircularProgressShow';
import "../css/carousel.css";

class TrainedImages extends React.Component {
    state = {allProductsData: []};
    componentDidMount() {
        axios.get("http://127.0.0.1:8000/trained_images")
            .then(response => {
                this.setState({allProductsData: response.data});
            })
    }

    renderImages() {
        return this.state.allProductsData['Trained_images'].map((productImagesPath, idx) => {
            let src = "./images/" + productImagesPath.trim();
            return (
                <div className="column">
                    <img src={src} style={{width:'150px', height: '150px'}} />
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {Object.keys(this.state.allProductsData).length > 0 ? this.renderImages()
                    : <CircularProgressShow /> }
                {/* <Container /> */}
            </div>
        );
    }
}

export default TrainedImages;