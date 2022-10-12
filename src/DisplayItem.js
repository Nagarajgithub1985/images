import React from 'react';

import './Item.css';

const displayItem = (props) => {
    const src = "./images/images/" + props.defaultImage;

    const renderIamges = () => {
        return props.remainingImages.map((image, idx) => {            
            let src = "./images/images/" + image.trim();
            return (
                <div className="column">
                    <img src={src} style={{width:'100px', height: '100px'}} />
                </div>
            );
        });
    }

    return (
        <div className="item">
            <div className="item">
                <div className="image">
                    <img width="200px" height="200px" src={src} />
                </div>
                <div className="content">
                    <a className="header">Item name</a>
                    <div className="meta">
                        <span className="cinema">{props.quality_status}</span>
                    </div>
                    <div className="description">
                        <p>{props.imageProps.item_description}</p>
                    </div>
                </div>
            </div>
            <div style={{padding: '2px'}}></div>

            <div className="row">
                {renderIamges()}
            </div>
            
        </div>
    )
}

export default displayItem;