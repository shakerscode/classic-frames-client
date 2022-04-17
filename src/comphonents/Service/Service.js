import React from 'react';
import './Service.css'
import { CameraIcon } from '@heroicons/react/solid'


const Service = ({ service }) => {
    const { name, img, price, description, shootingTime } = service;
    return (
        <div className='service-section'>
            <img src={img} alt="" />
            <div className='service-info'>
                <h3>{name}</h3>
                <h6 className='pricing'>{price}$</h6>
                <div className="shooting-info">
                <CameraIcon className='camera-icon'></CameraIcon> <span>{shootingTime}</span>
                </div>
                <p className='service-description'>{description}</p>
                <button>Book Now</button>
            </div>
        </div>
    );
};

export default Service;