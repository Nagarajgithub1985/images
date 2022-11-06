import React from "react";
import axios from "axios"
import ReactModal from 'react-modal';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import Container from '../Container';
import CircularProgressShow from '../../CircularProgressShow';
import MUITable from '../mui/Table';
import "../css/carousel.css";
import MUIVerticalHeader from '../mui/TableWithFirstColumnAsHeader';
import ShowProdImages from "../ShowProductImages";
import history from '../History';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Style = {
    display: "flex",
    justifyContent: "center",
    marginTop: "200px"
};

class ProcessImage extends React.Component {
    state = {
        recentProcessedProduct: [],
        modalOpen: false
    };

    componentDidMount = () => {
        axios.get("http://127.0.0.1:8000/process")
            .then((response) => {
                this.setState({
                    recentProcessedProduct: response.data
                });
            });
        // setTimeout(() => {
        //     this.setState({
        //         recentProcessedProduct: {"id":120,"productName":"Apple","productSerialNumber":90006,"productImagesPath":"Apple 90006\\badquality2023.jpg, Apple 90006\\badquality2057.jpg, Apple 90006\\badquality2074.jpg, Apple 90006\\badquality2077.jpg, Apple 90006\\goodquality245.jpg, Apple 90006\\goodquality315.jpg","itemStatus":"damaged"},
        //         modalOpen: true
        //     });
        // },1000) 
    }

    renderImages = () => {
        // return <MUITable data={this.state.recentProcessedProduct} />;
        return <MUIVerticalHeader data={this.state.recentProcessedProduct} />
        // return (
        //     <Modal open={this.state.modalOpen}
        //            onClose={() => {
        //                 //this.setState({modalOpen: false})
        //                 history.push("/history");
        //             }}
        //     >
        //         <Box sx={modalStyle}>
        //             <ShowProdImages productData={this.state.recentProcessedProduct} />
        //         </Box>
        //     </Modal>
        // );
    }

    render() {
        return (
            <div>
                {/* <CircularProgressShow />
                {Object.keys(this.state.recentProcessedProduct).length > 0 ? this.renderImages()
                    : <CircularProgressShow /> } */}
                {/* <Container /> */}

                {Object.keys(this.state.recentProcessedProduct).length > 0 ? this.renderImages()
                    : <CircularProgressShow processModalStyle={Style} text="Processing..." /> }
            </div>
        )
    }
}

export default ProcessImage;