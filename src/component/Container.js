import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function SimpleContainer() {
  const onFileSelect = (e) => {

    console.log(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
            <input
                accept="image/*"
                // className={classes.input}
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                onChange={onFileSelect}
            />
            <label style={{marginLeft: '100px', marginTop: '700px'}} htmlFor="raised-button-file">
                <b>Upload Images:</b>&nbsp;&nbsp;&nbsp;
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </label> 
        </Box>
      </Container>
    </React.Fragment>
  );
}