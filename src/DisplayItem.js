import React from 'react';
import ThreeSixty from "react-360-view";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import './Item.css';
import ItemInfo from './ItemInfo';

const displayItem = (props) => {
    const src = "./images/images/" + props.defaultImage;

    const renderIamges = () => {
        return props.remainingImages.map((image, idx) => {            
            let src = "./images/images/" + image.trim();
            return (
                <div className="column">
                    <img src={src} style={{width:'150px', height: '150px'}} />
                </div>
            );
        });

        // return (
        //     <ImageList sx={{ width: 700, height: 350 }} cols={4} rowHeight={164}>
        //       {props.remainingImages.map((image, idx) => (
                
        //         <ImageListItem key={idx}>
        //           <img
        //             src={`./images/images/${image.trim()}`}
        //             srcSet={`./images/images/${image.trim()}`}
        //             // alt={item.title}
        //             loading="lazy"
        //           />
        //         </ImageListItem>
        //       ))}
        //     </ImageList>
        //   );
    }

    return (
        <React.Fragment>
            <div style={{marginBottom: '5px;'}}></div>
            <div style={{textAlign: 'center'}}>
                <div style={{disply: 'inline-block'}}>{renderIamges()}</div>
                <div style={{disply: 'inline-block'}}><ItemInfo itemInfo={props.imageProps} /></div>
                <div style={{marginTop: '5px;'}}>&nbsp;</div>
            </div>
        </React.Fragment>
        // <div className="item">
        //     <div className="item">
        //         <div className="image">
        //             <ThreeSixty
        //                 amount={75}
        //                 imagePath="./images/images/"
        //                 fileName={props.defaultImage}
        //                 spinReverse
        //             />
        //             {/* <img width="200px" height="200px" src={src} /> */}
        //         </div>
        //         <div className="content">
        //             <a className="header">Item name</a>
        //             <div className="meta">
        //                 <span className="cinema">{props.imageProps.quality_status}</span>
        //             </div>
        //             <div className="description">
        //                 <p>{props.imageProps.item_description}</p>
        //             </div>
        //         </div>
        //     </div>
        //     <div style={{padding: '2px'}}></div>

        //     <div className="row">
        //         {renderIamges()}
        //     </div>
            
        // </div>
    )
}

export default displayItem;