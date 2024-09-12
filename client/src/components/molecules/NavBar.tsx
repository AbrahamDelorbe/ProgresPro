import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonComponent from '../atoms/Buttons';
import IconButton from '@mui/material/IconButton';
import { ImageComponent } from '../atoms/Image';
import ProgressProLogo from "../../assets/progressProLogo.png";



export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <ImageComponent url={ProgressProLogo} />
                    </Typography>

                    <ButtonComponent text="Login" color='inherit' />
                    <ButtonComponent text="Sign up" color='inherit' />
                </Toolbar>
            </AppBar>
        </Box>
    );
}