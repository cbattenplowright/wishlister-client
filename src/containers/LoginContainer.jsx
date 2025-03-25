import React from 'react';
import LoginForm from '../components/LoginForm';
import wishlisterLogo from '../assets/wishlisterlogo.svg';
import './LoginContainer.css';

const LoginContainer = () => {

    return (
        <div className="login-container">
            <img src={wishlisterLogo} alt="wishlister logo" />
            <LoginForm
            />
        </div>
    )
};

export default LoginContainer;