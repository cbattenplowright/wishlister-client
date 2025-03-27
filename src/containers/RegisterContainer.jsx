import React from 'react';
import {useState} from 'react';
import RegisterForm from '../components/RegisterForm';
import wishlisterLogo from '../assets/wishlisterlogo.svg';
import './RegisterContainer.css';


const RegisterContainer = () => {

    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const registerUser = async () => {
        try {
            const response = await fetch(
                "https://wishlister-h2tf.onrender.com/api/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(
                        {
                            "email": email,
                            "password": password,
                            "name": name,
                            "dateOfBirth": dob
                        }
                    )
                }
            )
        }
    }

    const handleSubmit = (e) => {
        console.log('Name:', e.name);
        console.log('Date of Birth:', e.dob);
        console.log('Email:', e.email);
        // TODO Call API endpoint to register user
    }

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
                confirmPassword={confirmPassword}
                onConfirmPasswordChange={setConfirmPassword}
                onSubmit={handleSubmit}
            />
        </div>
    )
};

export default RegisterContainer;