import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
// import data from '../../fakeData/fakeData.json';

const Services = () => {
    const [newService, setNewService] = useState([]);

    useEffect(() => {       
        fetch('http://localhost:4500/services')
            .then(res => res.json())
            .then(data => setNewService(data))
    }, [])

    // const handleService = () =>{
    //     fetch('http://localhost:4500/addServices', {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(data)
    //     })
    // }
    return (
        <section className='mt-5'>
            <div className="container">
                <h2 className="text-center mt-4">OUR SERVICES</h2>
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