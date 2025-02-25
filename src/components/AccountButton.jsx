import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const AccountButton = () => {

    return (
        <button>
            <AccountCircleIcon />
            <p>Account</p>
            {/* <Icon src={AccountCircle}/> */}
            {/* <svg src={AccountCircle} /> */}
            {/* <img src={AccountCircle} className="Account Button" alt="Account button"/> */}
        </button>
    )

}

export default AccountButton;