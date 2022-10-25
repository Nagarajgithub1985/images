import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
//import Modal from './Modal';

import ShowProdImages from '../ShowProductImages';
import { fontSize } from '@mui/system';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CustomizedTables = (props) => {
    const [open, setOpen] = React.useState(false);
    const [productData, setProductData] = React.useState("");
    const handleOpen = (productData) => {
        setOpen(true);
        setProductData(productData);
    }
    const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Product Name</StyledTableCell>
                        <StyledTableCell align="right">Product Serial Number</StyledTableCell>
                        <StyledTableCell align="right">Item Status</StyledTableCell>
                        <StyledTableCell align="right">View</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row) => (
                        <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                            {row.productName}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.productSerialNumber}</StyledTableCell>
                        <StyledTableCell align="right">
                            <span style={
                                {
                                    backgroundColor: row.itemStatus === "damaged" ? "red" : "green",
                                    color: "white",
                                    padding: "10px",
                                    fontSize: "16px"
                                }}>
                                {row.itemStatus}
                            </span>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <Button variant="contained"  onClick={() => handleOpen(row)}>View Images</Button>
                        </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Modal open={open} onClose={handleClose}>
            <Box sx={modalStyle}>
                <ShowProdImages productData={productData} />
            </Box>
        </Modal>
      </React.Fragment>
  );
}

export default CustomizedTables;