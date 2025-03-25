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
        const [ name, value ] = e.target;
        setInput({
            ...prev,
            [name]:value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === credentials.email && password === credentials.password) {
            alert('Login successful');
            navigate('/wishlists')
        }
        console.log('Email:', email);
        console.log('Password:', password);
    }

    return(
        <>
            <form className="login-form" onSubmit={handleSubmit}>
                <input 
                    type="email"
                    value={input.email}
                    placeholder="Email address"
                    onChange={handleInputChange}
                    required
                />
                <input 
                    type="password"
                    value={input.password}
                    placeholder="Password"
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </>
    )
};

export default LoginForm;