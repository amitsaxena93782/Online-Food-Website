import React from 'react';
import Background from "../images/Background.png";
import "./top.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';

const Top = () => {
  return (
    <div className='Top' style={{ backgroundImage: `url(${Background})` }} >
        <div className='Header'>
          <div id='buttons'>
            <Button variant='text' id='login_top'>Login</Button>
            <Button variant='outlined' id='create_top'>Create an account</Button>
          </div>
            
        </div>
        <div className='Icon'>
            <div id='icon'>e!</ div>
        </ div>
        <div className='heading'>Find the best restaurants, cafés, and bars</div>
        <div className='Searches'>
            <TextField id='city' label="City" variant="outlined" />
            <TextField id='search' label="Search for Restaurants" variant="outlined" />
        </div>
    </div>
  );
};

export default Top;
