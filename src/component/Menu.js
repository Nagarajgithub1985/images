import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import history from './History';

export default function MenuPopupState() {
  const MenuClick = (popupState, path) => {
    popupState.close();
    history.push(path);
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => MenuClick(popupState, '/process')}>Process Image</MenuItem>
            <MenuItem onClick={() => MenuClick(popupState, '/history')}>History</MenuItem>
            <MenuItem onClick={() => MenuClick(popupState, '/trained_images')}>Trained Images</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}