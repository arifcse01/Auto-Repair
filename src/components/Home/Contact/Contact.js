import React from 'react';

const Contact = () => {
    return (
        <section className="pt-5 pb-5">
            <h3 className="text-center mt-3">Contact Us</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 shadow rounded p-4">
                        <form action="">
                            <div className="form-group">
                                <label for="name">Your Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Write Your Name" />
                            </div>
                            <div className="form-group">
                                <label for="email">Your Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Write Your Email"/>
                            </div>
                            <div className="form-group">
                                <label for="phone">Your Phone No</label>
                                <input type="number" className="form-control" id="phone" placeholder="Your Phone"/>
                            </div>
                            <div className="form-group">
                                <label for="text-area">Comments</label>
                                <textarea className="form-control" id="text-area" placeholder="Comments" />
                            </div>
                            <div>
                                <input className="btn btn-success" type="button" value="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;