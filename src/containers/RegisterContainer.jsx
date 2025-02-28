import React from 'react';
import {useState} from 'react';
import RegisterForm from '../components/RegisterForm';
import wishlisterLogo from '../assets/wishlisterlogo.svg';

const RegisterContainer = () => {

    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="register-container">
            <img src={wishlisterLogo} alt="wishlister logo" />
            <RegisterForm 
                name={name}
                onNameChange={setName}
                dob={dob}
                onDobChange={setDob}
                email={email}
                onEmailChange={setEmail}
                password={password}
                onPasswordChange={setPassword}
            />
        </div>
    )
};

export default RegisterContainer;