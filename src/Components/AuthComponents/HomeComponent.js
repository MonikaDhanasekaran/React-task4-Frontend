import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import "./Auth.css";

const HomeComponent = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    }

    return(
        <>
            <div id="homeDiv">
                <Button variant="contained" id="homeButton" onClick={handleLogout}><LogoutIcon />Logout</Button>
            </div>
        </>
    )
}

export default HomeComponent;