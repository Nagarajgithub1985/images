import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";

const columns = [
  //{ field: 'id', headerName: 'Id', width: 50, hidden: true },
  { field: 'image', headerName: 'Image', width: 170, height: 200,
    renderCell: (params) => {
        return (
            <img src={URL.createObjectURL(params.row.image)} width="100px" height="100px" />
        );
    }
  }
];

const ViewModifyProdImages = (props) => {
    const [rows, setRows] = useState(props.uploadedImages);
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectionModel, setSelectionModel] = React.useState([]);


    // let rows = Object.values(props.uploadedImages).map((imageFile, idx) => {
    //     return {
    //         id: idx,
    //         image: imageFile
    //     }
    // });

    const onSelectedRows = (ids) => {
        const selectedRowData = rows.filter((row, idx) => {
           return ids.indexOf(row.id) !== -1;
        });
        setSelectedRows(selectedRowData);
    }

    const clearSelections = () => {
        const selectedIDs = new Set(selectionModel);
            // you can call an API to delete the selected IDs
            // and get the latest results after the deletion
            // then call setRows() to update the data locally here
            setRows((r) => r.filter((x) => !selectedIDs.has(x.id)));
    }

    const saveImages = () => {
        // const formData = new FormData();
        // for (let i = 0 ; i < rows.length ; i++) {
        //     formData.append("files", rows[i].image);
        // }
        // axios.post('http://127.0.0.1:8000/uploadfiles', formData)
        //     .then(response => console.log(response));

        props.closeModalOnSave(rows);
    }

    const onFileSelect = (e) => {
        const newRows = Object.values(e.target.files).map((imageFile, idx) => {
            return {
                id: rows.length + idx,
                image: imageFile
            }
        });
        setRows([...newRows, ...rows]);
    }

    return (
        <div style={{ height: 450, width: '100%' }}>
            <div>
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={clearSelections}>
                    Remove
                </Button>&nbsp;
                <input
                    accept="image/*"
                    // className={classes.input}
                    style={{ display: 'none' }}
                    id="raised-button-upload-more-file"
                    multiple
                    type="file"
                    onChange={onFileSelect}
                />
                <label htmlFor="raised-button-upload-more-file">
                    <Button variant="contained" component="span">
                    Upload More
                    </Button>
                </label>&nbsp;
                <Button variant="contained" component="label" onClick={saveImages}>
                    Done
                </Button>
            </div>
            &nbsp;
            <DataGrid
                justify="space-between"
                rowHeight={100}
                rows={rows}
                columns={columns}
                pageSize={25}
                rowsPerPageOptions={[10]}
                checkboxSelection
                onSelectionModelChange={(newSelectionModel) => {
                    setSelectionModel(newSelectionModel);
                  }}
                  selectionModel={selectionModel}
                //onSelectionModelChange={(ids) => {onSelectedRows(ids)}}
            />
        </div>
    );
}

export default ViewModifyProdImages;