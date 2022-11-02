import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CircularIndeterminate() {
  return (
    <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "200px"
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
          <Typography style={{marginTop: "40px"}} position='absolute'>Processing....</Typography>
          {/* <CircularProgressbar value="55" text="processing" />; */}
        </Box>
    </div>
  );
}