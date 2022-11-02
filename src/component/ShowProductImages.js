import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const ShowProdImages = (props) => {
    let product = props.productData;
    let imagesArr = product.productImagesPath.split(",");
    return (
        <div>
            <Carousel autoPlay="true" infiniteLoop="true" interval="3000">
                {imagesArr.map((imagePath) => {
                    let status = product.itemStatus;
                    let bgColor = status === "damaged" ? "red" : "green";
                    return (
                        <div>
                            <img src={`../../images/images/${imagePath.trim()}`} />
                            {/* <div className="legend" style={{marginTop: "200px"}}>
                                <div>Product Name: {product.productName}</div>
                                <div>Product Serial Number: {product.productSerialNumber}</div>
                                <div>Item Status: &nbsp;
                                    <span  style={{backgroundColor: bgColor}}>
                                        {product.itemStatus}
                                    </span>
                                </div>
                            </div> */}
                        </div>
                    );
                })}
                
            </Carousel>
            {/* <div className="legend" style={{backgroundColor: "black", color: "white", paddingLeft: "300px"}}>
                <div>Product Name: {product.productName}</div>
                <div>Product Serial Number: {product.productSerialNumber}</div>
                <div>Item Status: &nbsp;
                    <span  style={{backgroundColor: "red"}}>
                        {product.itemStatus}
                    </span>
                </div>
            </div> */}
        </div>
    );
}

export default ShowProdImages;