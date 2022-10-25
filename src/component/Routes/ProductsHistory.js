import React from 'react';
import axios from 'axios';
import React360Viewer from 'react-360-view';

class ProductHistory extends React.Component {
    componentDidMount() {
        axios.get("http://127.0.0.1:8000/history")
            .then(response => {
                console.log(response)
            })
    }

    render() {
        return (
            <div>
                history
            </div>
        );
    }
}

export default ProductHistory;