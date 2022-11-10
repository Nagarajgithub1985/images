import React from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import CircularProgressShow from '../../CircularProgressShow';
import ViewModifyProdImages from '../ViewModifyNewProdImages';

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
  
const processModalStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "0px"
};

class AddProduct extends React.Component {
    state = {
        selectedImages: [], 
        openModal: false,
        productName: '',
        processSubmit: false,
        openDialog: false
    };

    

    onFileSelect = (e) => {
        const rows = Object.values(e.target.files).map((imageFile, idx) => {
            return {
                id: idx,
                image: imageFile
            }
        });
        this.setState({
            selectedImages: rows
        })
    }

    handleModalInViewModifyPage = (rows) => {
        console.log(rows)
        this.setState({
            openModal: false,
            selectedImages: rows
        });
    }

    handleViewModify = () => {
        this.setState({
            openModal: true
        });
    }

    submitFormData = () => {
        const formData = new FormData();
        for (let i = 0 ; i < this.state.selectedImages.length ; i++) {
            formData.append("files", this.state.selectedImages[i].image);
        }
        formData.append("product_name", this.state.productName);

        this.setState({processSubmit: true});

        // JUST FOR DEMO PURPOSE.
        setTimeout(() => {
            this.setState({
                selectedImages: [],
                productName: '',
                processSubmit: false,
                openDialog: true
            })
            //alert("Images uploaded successfully");            
        }, 2000);

        axios.post('http://127.0.0.1:8000/uploadfiles', formData)
            .then(response => {
                // this.setState({
                //     selectedImages: [],
                //     productName: '',
                //     processSubmit: false
                // })
            });
    }

    onProductNameChange = (e) => {
        this.setState({
            productName: e.target.value
        })
    }

    render() {
        return (
            <div style={{
                    marginLeft: "50px",
                    marginTop: "50px", 
                    backgroundColor: "#e0e0e0", 
                    padding: "30px",
                    width: "90%",
                    border: "1px solid #e0e0e0"
                }}
            >
                <form>
                    <TextField style={{
                            backgroundColor: 'white',
                            width: "50%",
                            marginRight: "70px"                                    
                        }}
                        name='product_name'
                        onChange={this.onProductNameChange}
                        value={this.state.productName}
                        label="Add Product" id="fullWidth" />
                    
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        multiple
                        type="file"
                        onChange={this.onFileSelect}
                    />
                    <label style={{marginLeft: '10px', marginTop: '700px'}} htmlFor="raised-button-file">
                        <b>Upload Images:</b>&nbsp;&nbsp;&nbsp;
                        <Button variant="contained" component="span">
                            Upload
                        </Button>
                    </label>
                    
                    {this.state.selectedImages.length > 0 && (
                        <span>&nbsp;
                            <Button variant="contained" color="primary" onClick={this.handleViewModify}>
                                View / Modify
                            </Button>
                        </span>
                    )}
                    
                    
                    <div style={{marginTop: "40px"}}>
                        <Button variant="contained" color="primary" onClick={this.submitFormData}>
                            Submit
                        </Button>
                    </div>
                </form>
                
                <Modal height='800px' open={this.state.openModal}
                        onClose={() => {
                          this.setState({
                                openModal: false
                          });                
                        }}
                >
                    <Box sx={modalStyle}>
                        <ViewModifyProdImages uploadedImages={this.state.selectedImages}
                            closeModalOnSave={this.handleModalInViewModifyPage}
                        />
                    </Box>
                </Modal>

                <Dialog
                    open={this.state.openDialog}
                    onClose={() => {this.setState({openDialog: false})}}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    {"SUCCESS"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        All the images have been uploaded successfully.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={() => {this.setState({openDialog: false})}}>Close</Button>
                    </DialogActions>
                </Dialog>

                {this.state.processSubmit && 
                        <CircularProgressShow 
                            processModalStyle = {processModalStyle}
                            text="Uploading images. Please wait..."
                        /> 
                }                
            </div>
        );
    }
}

export default AddProduct;