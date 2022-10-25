import React from "react";

import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from '../Container';
import CircularProgressShow from '../../CircularProgressShow';
import "../css/carousel.css";

class ProcessImage extends React.Component {
    state = {processeImages: false};

    componentDidMount = (str) => {
        setTimeout(() => {
            this.setState({processeImages: true});
        }, 5000, "tested");
        
    }

    renderImages = () => {
        const response = {
            "id":1,
            "productName":"Apple",
            "productSerialNumber":26475,
            "productImagesPath":"Apple 26475\\badquality2011.jpg, Apple 26475\\badquality2127.jpg, Apple 26475\\badquality2244.jpg, Apple 26475\\badquality2268.jpg, Apple 26475\\badquality2302.jpg, Apple 26475\\badquality2340.jpg",
            "itemStatus":"damaged"
        }

        let imagesArr = response.productImagesPath.split(",");
        return (
            <Carousel autoPlay="true" infiniteLoop="true" interval="3000">
                {imagesArr.map((imagePath) => {
                    let status = response.itemStatus;
                    let bgColor = status === "damaged" ? "red" : "green";
                    return (
                        <div>
                            <img src={`../../images/images/${imagePath.trim()}`} />
                            <div className="legend" style={{marginTop: "200px"}}>
                                <div>Product Name: {response.productName}</div>
                                <div>Product Serial Number: {response.productSerialNumber}</div>
                                <div>Item Status: &nbsp;
                                    <span  style={{backgroundColor: bgColor}}>
                                        {response.itemStatus}
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
                {!this.state.processeImages ? <CircularProgressShow />: this.renderImages()}
                {/* <Container /> */}
            </div>
        )
    }
    
}

export default ProcessImage;