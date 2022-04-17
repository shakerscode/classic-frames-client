import React from 'react';
import './OtherLoginSystem.css'
import facebook from '../../images/Social Icon/facebook.png'
import github from '../../images/Social Icon/github.png'
import google from '../../images/Social Icon/search.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



const OtherLoginSystem = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const createAccountWithGoogle = () =>{
        signInWithGoogle();
    }
    if(user){
        return navigate('/')
    }
    if(loading){
        return toast.success('Loading...', {id: 'loading'})
    }
    if(error){
         toast.error(error.message, {id: 'error'})
    }
    return (
        <div className='other-login-system'>
            <div className='or-section'>
                <div className='border-one'></div>
                <div className='or-text'>or</div>
                <div  className='border-two'></div>
            </div>
            <div onClick={createAccountWithGoogle} className='login-systems'>
               <img src={google} alt="" width={'50px'}/>
               <h4>Continue with Google</h4>
            </div>
            <div className='login-systems'>
               <img src={github} alt="" width={'50px'}/>
               <h4>Continue with Google</h4>
            </div>
            <div className='login-systems'>
               <img src={facebook} alt="" width={'50px'}/>
               <h4>Continue with Google</h4>
            </div>
        </div>
    );
};

export default OtherLoginSystem;