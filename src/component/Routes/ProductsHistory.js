import React from 'react';
import axios from 'axios';

import CircularProgressShow from '../../CircularProgressShow';
import MUITable from '../mui/Table';
import "../css/carousel.css";

class ProductHistory extends React.Component {
    state = {recentProcessedProduct: []};
    componentDidMount() {
        axios.get("http://127.0.0.1:8000/history")
            .then(response => {
                this.setState({recentProcessedProduct: response.data});
            })
    }

    renderImages() {
        return <MUITable data={this.state.recentProcessedProduct} />;
    }

    render() {
        return (
            <div>
                {Object.keys(this.state.recentProcessedProduct).length > 0 ? this.renderImages()
                    : <CircularProgressShow /> }
                {/* <Container /> */}
            </div>
        );
    }
}

export default ProductHistory;