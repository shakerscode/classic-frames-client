import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OtherLoginSystem from '../OtherLoginSystem/OtherLoginSystem';
import auth from '../../firebase.init'
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';

const SignUp = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [confPassword, setConfPassword] = useState({ value: '', error: '' });
    


    const [
        createUserWithEmailAndPassword,
        newUser,
        newUserLoading,
        newUserError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const getEmailValue = e => {
        const email = e.target.value;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmail({ value: email, error: '' });
        } else {
            setEmail({ value: '', error: 'Please enter a valid email' });
        }
    }
    const getPasswordValue = e => {
        const password = e.target.value;
        if (password.length >= 6) {
            setPassword({ value: password, error: '' });
        } else {
            setPassword({ value: '', error: 'Minimum 6 character needed' })
        }
    }
    const getConfPassValue = e => {
        const confirmPass = e.target.value;
        
        if (password.value === confirmPass){
            setConfPassword({value: confPassword, error: ''})
        }else{
            setConfPassword({value: '', error: "Password don't match"})
        }
    }
  
    const signUpHandel = (e) => {
        e.preventDefault();
        if(email.value === ''){
            setEmail({value:'', error: 'Email fild is empty'})
            return;
        }
        if(password.value === ''){
            setPassword({value: '', error: 'Password fild is empty'})
            return;
        }
        if(email.value && password.value && confPassword.value === password.value){
            createUserWithEmailAndPassword(email.value, password.value);
            if (newUserError) {
                return toast.error(newUserError.message );
               
              }
              if (newUserLoading) {
                return toast.success('Loading...');
              }
              if (newUser) {
                return navigate('/')
              } 
        }
       

    }

    return (
        <div>
            <div className='signup-section'>
                <h1 className='signup-header'>SignUp Here</h1>

                <form onSubmit={signUpHandel} className='signup-forum'>
                    <input onBlur={getEmailValue} type="email" placeholder='Email' required />
                    {
                        email?.error && <p className='error'>{email.error}</p>
                    }
                    <input onBlur={getPasswordValue} type="password" name="password" id="password" placeholder='Password' required />
                    {
                     password?.error && <p className='error'>{password.error}</p>   
                    }
                    <input onBlur={getConfPassValue} type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm password' required />
                    {
                        confPassword?.error && <p className='error'>{confPassword.error}</p>
                    }
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