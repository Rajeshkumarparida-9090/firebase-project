import React from "react";
import {AppBar,Toolbar,IconButton,Typography} from "@mui/material";

const Header = ()=>{
    return(
        // <div className="ui fixed menu">
        //     <div className="ui container center">
        //         <h2>Fack Shop</h2>
        //     </div>
        // </div>
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                {/* <MenuIcon /> */}
                <h2>Fack Shop</h2>
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                Photos
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Header;