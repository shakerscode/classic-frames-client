import React from 'react';
import './AboutMe.css'
import myPic from '../../images/me.png'

const AboutMe = () => {
    return (
        <div>
            <div className="about-me">
                <div className='my-image'>
                    <img src={myPic} alt="" />
                </div>
                <div className='my-info'>
                    <p>
                        
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;