import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
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
                                <Link to="/login"><button className="btn btn-success">Login</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="banner">
                <div className="banner-info">
                    <h1>BEST AUTO MAINTENANCE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cumque harum, aliquam necessitatibus officia aperiam.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;