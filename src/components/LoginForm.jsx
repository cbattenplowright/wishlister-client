import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({}) => {

    let navigate = useNavigate();

    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    const credentials = {
        email: 'test@gmail.com',
        password: 'test123'
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.email !== "" && input.password !== "") {
            // alert('Login successful');
            // navigate('/wishlists');
        }
        alert('please provide a valid input');
    }

    return(
        <>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="user-email">Email</label>
                <input 
                    type="email"
                    id="user-email"
                    name="email"
                    value={input.email}
                    placeholder="example@gmail.com"
                    onChange={handleInputChange}
                    aria-describedby="user-email"
                    aria-invalid="false"
                    required
                />
                <label htmlFor="user-password">Password</label>
                <input 
                    type="password"
                    id="user-password"
                    name="password"
                    value={input.password}
                    onChange={handleInputChange}
                    aria-describedby="user-email"
                    aria-invalid="false"
                    required
                />
                <button className="btn-submit" type="submit">Login</button>
            </form>
        </>
    )
};

export default LoginForm;