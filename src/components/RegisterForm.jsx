import React from 'react';

const RegisterForm = ({name, onNameChange, dob, onDobChange, email, onEmailChange, password, onPasswordChange}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
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
                    value={password}
                    placeholder="Confirm Password"
                    onChange={(e) => onPasswordChange(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </>
    )
};

export default LoginForm;