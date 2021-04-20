import React, { useEffect, useState } from 'react';
import SingleService from '../../SingleService/SingleService';
import './Service.css';

const Services = () => {
    const [newService, setNewService] = useState([]);

    useEffect(() => {       
        fetch('https://calm-beyond-04420.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setNewService(data))
    }, [])

    
    return (
        <section className='pt-2'>
            <div className="container">
                <h3 className="text-center mt-4">OUR SERVICES</h3>
                <div className="row">
                    {
                        newService.map(service => <SingleService service={service} key={service._id}></SingleService>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;