import React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import ShowProdImages from '../ShowProductImages';

const style = {
  backgroundColor: "#60878B",
  color: "white", 
  padding: "10px"
};

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

function App1(props) {
    const [open, setOpen] = React.useState(false);
    const [productData, setProductData] = React.useState("");
    const handleOpen = (productData) => {
        setOpen(true);
        setProductData(productData);
    }
    const handleClose = () => setOpen(false);

    let data = props.data;

    return (
      // <div className="App">
      <div style={{marginLeft: "100px", marginTop: "25px"}}>
        <table border="1" cellPadding="25">
          <tr>
            <th style={style}>Product Name</th>
            <td width="400" align='center'>{data.productName}</td>
          </tr>
          <tr>
          <th style={style}>Product Serial Number</th>
            <td align='center'>{data.productSerialNumber}</td>
          </tr>
          <tr>
          <th style={style}>Item Status</th>
            <td align='center' style={
              {
                  backgroundColor: data.itemStatus === "damaged" ? "red" : "green",
                  color: "white",
                  //padding: "10px",
                  fontSize: "16px"
              }}>{data.itemStatus}
            </td>
          </tr>
          <tr>
          <th style={style}>View</th>
            <td align='center'>
              <Button variant="contained"  onClick={() => handleOpen(data)}>
                View Images
              </Button>
            </td>
          </tr>
        </table>
        <Modal open={open} onClose={handleClose}>
            <Box sx={modalStyle}>
                <ShowProdImages productData={productData} />
            </Box>
        </Modal>
      </div>
    );
  }
  
  export default App1;