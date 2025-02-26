import React from 'react';
import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import wishlisterLogo from '../assets/wishlisterlogo.svg';

const LoginContainer = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-container">
            <img src={wishlisterLogo} alt="wishlister logo" />
            <LoginForm email={email} onEmailChange={setEmail} password={password} onPasswordChange={setPassword}/>
        </div>
    )
};

export default LoginContainer;