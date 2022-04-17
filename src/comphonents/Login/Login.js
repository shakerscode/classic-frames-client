import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='login-section'>
                <h1 className='login-header'>Login Here</h1>

                    <form className='login-forum'>
                        <input type="emalil" placeholder='Email' />
                        <input type="password" name="password" id="password" placeholder='Password' />
                        <p className='reset-password'>Forget Password? <span> Reset please.</span></p>
                        <input id='login-btn' type="submit" value="Login" />
                    </form>
                    <div className='register-text'>
                        <p>Don't have an account? <span onClick={()=>navigate('/sign-up')}>SignUp here!</span></p>
                    </div>
            </div>

        </div>
    );
};

export default Login;