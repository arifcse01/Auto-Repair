import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Auto Repair</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto p-2">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Our Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Our Team</a>                                
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Testimonials</a>                                
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact us</a>                                
                            </li>
                            <li>
                                <button className="btn btn-success">Login</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>            
        </div>
    );
};

export default Navbar;