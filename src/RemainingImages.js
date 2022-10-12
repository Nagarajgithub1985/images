import React from 'react';

const RemainingImages = (props) => {
    let transformedImages, finalImages = [];
    let src = "./images/images/" + props.image;
    console.log(src);
    return (
        <div className="column">
            <img src={src} style={{width:'100px', height: '100px'}} />
        </div>
    );
}

export default RemainingImages;