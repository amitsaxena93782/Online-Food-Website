import React from 'react'
import "./nav.css"
import {Link} from 'react-router-dom'
import Button from "@mui/material/Button";

const Nav = () => {
  return (
    <div id='nav'>
        <Link to={'/'} id='logo'>
            <div id='navIcon'>e!</div>
        </Link>
        <div id='buttons'>
            <Button varaint="text" id='login'>LOGIN</Button>
            <Button varaint="outlined" id='create'>Create an account</Button>
        </div>
    </div>
  )
}

export default Nav