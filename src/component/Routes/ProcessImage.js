import React from "react";
import axios from "axios"
import ReactModal from 'react-modal';

import Container from '../Container';
import CircularProgressShow from '../../CircularProgressShow';
import MUITable from '../mui/Table';
import "../css/carousel.css";

class ProcessImage extends React.Component {
    state = {
        recentProcessedProduct: []
    };

    componentDidMount = () => {
        axios.get("http://127.0.0.1:8000/process")
            .then((response) => {
                this.setState({
                    recentProcessedProduct: [response.data]
                });
            });
    }

    renderImages = () => {
        return <MUITable data={this.state.recentProcessedProduct} />;
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