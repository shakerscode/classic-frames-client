import React from 'react';
import './OtherLoginSystem.css'
import facebook from '../../images/Social Icon/facebook.png'
import github from '../../images/Social Icon/github.png'
import google from '../../images/Social Icon/search.png'

const OtherLoginSystem = () => {
    return (
        <div className='other-login-system'>
            <div className='or-section'>
                <div className='border-one'></div>
                <div className='or-text'>or</div>
                <div  className='border-two'></div>
            </div>
            <div className='login-systems'>
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