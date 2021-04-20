import React from 'react';
import facebook from '../../../icons/facebook.png';
import youtube from '../../../icons/youtube.png';
import twitter from '../../../icons/twitter.png';
import linkedin from '../../../icons/linkedin.png';

const Footer = () => {
    const footerStyle = {
        background: "#2E375F",
        color: "#ffffffcb",
        paddingTop: "50px",
        paddingBottom: "30px"
    }

    const imgStyle = {
        width: "40px"
    }

    return (
        <section style={footerStyle}>
            <div className="container">
                <div className="row pb-3">
                    <div className="col-md-4">
                        <h3>Company</h3>
                        <p>About</p>
                        <p>Services</p>
                        <p>Projects</p>
                        <p>Our Team</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Quick Links</h3>
                        <p>Our Reviews</p>
                        <p>Services</p>
                        <p>Blogs</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="col-md-4">
                        <h3>About Us</h3>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, cum sequi repudiandae assumenda, officiis velit enim tempora voluptatibus libero asperiores pariatur dicta temporibus quas dolorum minus. Unde excepturi necessitatibus libero?</p>
                        <div className="d-flex justify-content-around">
                            <img style={imgStyle} src={facebook} alt="icon" />
                            <img style={imgStyle} src={youtube} alt="" />
                            <img style={imgStyle} src={twitter} alt="" />
                            <img style={imgStyle} src={linkedin} alt="" />
                        </div>
                    </div>
                </div>
                <hr/>
                <footer>
                    <p className="text-center pt-2">Copyright © 2021 Car Maintenance. All Rights Reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Footer;