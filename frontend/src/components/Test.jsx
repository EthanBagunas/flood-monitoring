import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Grid, Paper } from "@mui/material";
import Button from '@mui/material/Button';
import { blue } from "@mui/material/colors";
import OtpTimer from 'otp-timer';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';


const Test = ({lat, lng}) => {
  const theme =useTheme();
  const [anchor, setAnchor] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchor(anchor ? null : event.currentTarget);
    };
  
    const open = Boolean(anchor);
    const id = open ? 'simple-popup' : undefined;
  
    return (
      <div>
        <AddLocationIcon sx={{color: theme.palette.primary.main}} onClick={handleClick}>
        </AddLocationIcon>
        <BasePopup id={id} open={open} anchor={anchor}>
          <PopupBody> 
            <p>Latitude: {lat}</p>
            <p>Longitude: {lng}</p>
          </PopupBody>
        </BasePopup>
      </div>
    );
}
const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const PopupBody = styled('div')(
  ({ theme }) => `
  width: max-content;
  padding: 12px 16px;
  margin: 8px;
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  box-shadow: ${
    theme.palette.mode === 'dark'
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`
  };
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  z-index: 1;
`,
);

export default Test;