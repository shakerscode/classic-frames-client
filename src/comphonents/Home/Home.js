import React, { useEffect, useState } from 'react';
import './Home.css'
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('servicesdata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='home-banner '>
                
            </div>
            <div id='' className="my-services">
                <div className="services-header">
                    <h1>Services</h1>
                    <p>Best Offer for you!</p>
                </div>
                <div className='services-section'>
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;