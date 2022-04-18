import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import OtherLoginSystem from '../OtherLoginSystem/OtherLoginSystem';
import { useAuthState } from "react-firebase-hooks/auth";

import './Login.css'

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [user] = useAuthState(auth);
    const from = location.state?.from?.pathname || "/";



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const [
        signInWithEmailAndPassword,
        signInUser,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const getEmailValue = e => {
        const email = e.target.value;
        setEmail(email)
    }
    const getPasswordValue = e => {
        const password = e.target.value;
        setPassword(password)
    }
    if (user) {
        return navigate(from, { replace: true });
    }
    if (loading) {
        return toast.success('Loading', { id: 'load' })
    }
    if (error) {

        toast.error(error.message, { id: 'error' })
    }

    const loginHandel = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div>
            <div className='login-section'>
                <h1 className='login-header'>Login Here</h1>

                <form onSubmit={loginHandel} className='login-forum'>
                    <input onBlur={getEmailValue} type="email" placeholder='Email' />
                    {
                        error?.message?.includes('user-not-found') ? <p className='error'>Invalid email</p> : ''
                    }
                    {
                        error?.message?.includes('invalid-email') ? <p className='error'>Please enter email</p> : ''
                    }
                    <input onBlur={getPasswordValue} type="password" name="password" id="password" placeholder='Password' />
                    {
                        error?.message?.includes('wrong-password') ? <p className='error'>Password is wrong</p>
                            :
                            ''
                    }
                    <p className='reset-password'>Forget Password? <span> Reset please.</span></p>
                    {
                        error?.message && <p>{error.message}</p>
                    }
                    <input id='login-btn' type="submit" value="Login" />
                </form>
                <div className='register-text'>
                    <p>Don't have an account? <span onClick={() => navigate('/sign-up')}>SignUp here!</span></p>
                </div>
                <OtherLoginSystem></OtherLoginSystem>
            </div>


        </div>
    );
};

export default Login;