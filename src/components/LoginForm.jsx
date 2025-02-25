import React from 'react';

const LoginForm = ({email, onEmailChange}) => {
    return(
        <>
            <form className="login-form">
                <input 
                    type="email"
                    value={email}
                    placeholder="Email address"
                    onChange={(e) => onEmailChange(e.target.value)}
                    required />
            </form>
        </>
    )
};

export default LoginForm;