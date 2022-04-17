import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='service-section'>
            <img src={img} alt="" />
            <div className='service-info'>
            <h3>{name}</h3>
            <p>{price}$</p>
            <p>{description}</p>
            <button>Book Now</button>
            </div>
        </div>
    );
};

export default Service;