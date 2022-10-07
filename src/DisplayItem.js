import React from 'react';

import './Item.css';

const displayItem = (props) => {
    return (
        <div className="item">
        <div className="item">
            <div className="image">
                <img src={props.item} />
            </div>
            <div className="content">
                <a className="header">Item name</a>
                <div className="meta">
                    <span className="cinema">Item specification</span>
                </div>
                <div className="description">
                    <p>Description</p>
                </div>
                <div className="extra">
                    <div className="ui label">any label?</div>
                    {/* <div className="ui label">
                        <i className="globe icon"></i>
                         Additional Languages
                    </div> */}
                </div>
            </div>

            
        </div>
        <div style={{padding: '2px'}}></div>
        <div className="row">
                <div className="column">
                    <img src="./images/download (1).jpg" alt="Snow" style={{width:'100px', height: '100px'}} />
                </div>
                <div className="column">
                    <img src="./images/download (2).jpg" alt="Forest" style={{width:'100px', height: '100px'}} />
                </div>
                <div className="column">
                    <img src="./images/download (3).jpg" alt="Mountains" style={{width:'100px', height: '100px'}} />
                </div>
                <div className="column">
                    <img src="./images/download (4).jpg" alt="Snow" style={{width:'100px', height: '100px'}} />
                </div>
                <div className="column">
                    <img src="./images/download (5).jpg" alt="Forest" style={{width:'100px', height: '100px'}} />
                </div>
                <div className="column">
                    <img src="./images/download (6).jpg" alt="Mountains" style={{width:'100px', height: '100px'}} />
                </div>
            </div>
        </div>
    )
}

export default displayItem;