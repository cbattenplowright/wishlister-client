import React from 'react';

const LoginForm = ({email, onEmailChange, password, onPasswordChange}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    }

    return(
        <>
            <form className="login-form" onSubmit={handleSubmit}>
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
                <button type="submit">Login</button>
            </form>
        </>
    )
};

export default LoginForm;