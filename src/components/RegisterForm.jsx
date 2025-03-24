import React from 'react';
import './RegisterForm.css';

const RegisterForm = ({name, onNameChange, dob, onDobChange, email, onEmailChange, password, onPasswordChange, confirmPassword, onConfirmPasswordChange, onSubmit}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({name, dob, email, password});
    }

    return(
        <>
            <form className="register-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => onNameChange(e.target.value)}
                    required
                />
                <input
                    type="date"
                    value={dob}
                    placeholder="Date of Birth"
                    onChange={(e) => onDobChange(e.target.value)}
                    required
                />
                <input 
                    type="email"
                    value={email}
                    placeholder="Email address"
                    onChange={(e) => onEmailChange(e.target.value)}
                    required
                />
                <input 
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => onPasswordChange(e.target.value)}
                    required
                />
                <input 
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={(e) => onConfirmPasswordChange(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </>
    )
};

export default RegisterForm;