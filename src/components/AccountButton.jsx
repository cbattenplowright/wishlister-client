import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';

const AccountButton = () => {
    return (
        <IconButton aria-label="account-button" href="#" className="Account Button">
            <AccountCircleIcon />
        </IconButton>
    )
};

export default AccountButton;