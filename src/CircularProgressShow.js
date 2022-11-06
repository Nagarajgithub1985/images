import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CircularIndeterminate(props) {
  return (
    <div style={props.processModalStyle}>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
          <Typography style={{marginTop: "40px"}} position='absolute'>
            <b>{props.text}</b>
          </Typography>
          {/* <CircularProgressbar value="55" text="processing" />; */}
        </Box>
    </div>
  );
}