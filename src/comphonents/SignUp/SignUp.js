import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OtherLoginSystem from '../OtherLoginSystem/OtherLoginSystem';
import auth from '../../firebase.init'
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const [
        createUserWithEmailAndPassword,
        newUser,
        newUserLoading,
        newUserError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('')

    const registere = (e) => {
        e.preventDefault()
        const emailIs = emailRef.current.value;
        const passwordIs = passwordRef.current.value;
        const confirmPassIs = confirmPasswordRef.current.value;
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailIs)){
            setEmail(emailIs)
        }else{
            setError('Pleaser enter a valid Email')
        }

                    // createUserWithEmailAndPassword(email, password);
              


    }

    return (
        <div>
            <div className='signup-section'>
                <h1 className='signup-header'>SignUp Here</h1>

                <form onClick={registere} className='signup-forum'>
                    <input ref={emailRef} type="emalil" placeholder='Email' required />
                    <p>{error ? error : ''}</p>
                    <input ref={passwordRef} type="password" name="password" id="password" placeholder='Password' required />
                    <input ref={confirmPasswordRef} type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm password' required />
                    <input id='signup-btn' type="submit" value="Sign Up" />
                </form>
                <div className='already-have-account-text'>
                    <p>Already have an account? <span onClick={() => navigate('/login')}>Login here!</span></p>
                </div>
                <OtherLoginSystem></OtherLoginSystem>

            </div>
        </div>
    );
};

export default SignUp;