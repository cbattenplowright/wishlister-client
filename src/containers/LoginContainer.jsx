import React from 'react';
import {useState} from 'react';
import LoginForm from '../components/LoginForm';

const LoginContainer = () => {

    const [email, setEmail] = useState('');

    return (
        <div className="login-container">
            <img src="https://via.placeholder.com/150" alt="wishlister logo" />
            <LoginForm email={email} onEmailChange={setEmail} />
        </div>
    )
};

export default LoginContainer;