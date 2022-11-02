import React from 'react';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';

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

class AddProduct extends React.Component {
    state = {selectedImages: [], openModal: false};

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

    handleModalInViewModifyPage = () => {
        this.setState({
            openModal: false
        });
    }

    handleViewModify = () => {
        this.setState({
            openModal: true
        });
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
                {/* {this.state.selectedImage && (
                    <div>
                        <img src={URL.createObjectURL(this.state.selectedImage)} />
                    </div>
                )} */}
                <form>
                    <TextField style={{
                            backgroundColor: 'white',
                            width: "50%",
                            marginRight: "70px"                                    
                        }}
                        label="Add Product" id="fullWidth" />
                    
                    <input
                        accept="image/*"
                        // className={classes.input}
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
                        <Button variant="contained" color="primary" type="submit">
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
            </div>
        );
    }
}

export default AddProduct;