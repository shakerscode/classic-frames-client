import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='signup-section'>
                <h1 className='signup-header'>SignUp Here</h1>

                    <form className='signup-forum'>
                        <input type="emalil" placeholder='Email' />
                        <input type="password" name="password" id="password" placeholder='Password' />
                        <input type="confirmPassword" name="confirmPassword" id="confirmPassword" placeholder='Confirm password' />
                        <input id='signup-btn' type="submit" value="Sign Up" />
                    </form>
                    <div className='already-have-account-text'>
                        <p>Already have an account? <span onClick={()=>navigate('/login')}>Login here!</span></p>
                    </div>

            </div>
        </div>
    );
};

export default SignUp;