import React, {useState} from 'react';

const Login = () => {
    return (
        <div>
            <input type="text" placeholder="name" />
            <input type="password" placeholder="enter password" />
            <button type="button">Signup</button>
            <button type="button">Login in</button>
        </div>
    )
}

export default Login;