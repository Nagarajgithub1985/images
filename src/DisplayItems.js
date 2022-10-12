import React from 'react';

import './Item.css';
import DisplayItem from './DisplayItem';

const displayItems = (props) => {
    let transformedImages, finalImages = [];

    props.items.forEach((item, index) => {
        let imgsArr = props.items[index].images.split(',');
        transformedImages = imgsArr.map((image, idx) => {
            if (idx === 0) {
                return <DisplayItem imageProps={props.items[index]} defaultImage = {image} remainingImages={imgsArr} />
            }         
        });
        finalImages.push(transformedImages);
    });

    return finalImages;
}

export default displayItems;