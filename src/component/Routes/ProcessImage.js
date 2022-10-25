import React from "react";
import axios from "axios"

import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from '../Container';
import CircularProgressShow from '../../CircularProgressShow';
import "../css/carousel.css";

class ProcessImage extends React.Component {
    state = {
        recentProcessedProduct: {}
    };

    componentDidMount = (str) => {
        axios.get("http://127.0.0.1:8000/process")
            .then((response) => {
                this.setState({
                    recentProcessedProduct: response.data
                });
            });
    }

    renderImages = () => {
        let product = this.state.recentProcessedProduct;
        let imagesArr = product.productImagesPath.split(",");
        return (
            <Carousel autoPlay="true" infiniteLoop="true" interval="3000">
                {imagesArr.map((imagePath) => {
                    let status = product.itemStatus;
                    let bgColor = status === "damaged" ? "red" : "green";
                    return (
                        <div>
                            <img src={`../../images/images/${imagePath.trim()}`} />
                            <div className="legend" style={{marginTop: "200px"}}>
                                <div>Product Name: {product.productName}</div>
                                <div>Product Serial Number: {product.productSerialNumber}</div>
                                <div>Item Status: &nbsp;
                                    <span  style={{backgroundColor: bgColor}}>
                                        {product.itemStatus}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        );
    }

    render() {
        return (
            <div>
                {Object.keys(this.state.recentProcessedProduct).length > 0 ? this.renderImages()
                    : <CircularProgressShow /> }
                {/* <Container /> */}
            </div>
        )
    }
}

export default ProcessImage;