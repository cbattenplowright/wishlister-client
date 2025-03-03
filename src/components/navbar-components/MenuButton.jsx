import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

const MenuButton = () => {
    return (
        <IconButton aria-label="menu-button" href="#" className="Menu Button">
            <MenuIcon />
        </IconButton>
    )
};

export default MenuButton;