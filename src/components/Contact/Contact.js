import React from 'react';

const Contact = () => {
    return (
        <section className="mt-5 mb-3">
            <h3 className="text-center">Contact Us</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 shadow rounded p-4">
                        <form action="">
                            <div className="form-group">
                                <label for="name">Your Name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label for="email">Your Email</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="form-group">
                                <label for="phone">Your Phone No</label>
                                <input type="number" className="form-control" id="phone" />
                            </div>
                            <div className="form-group">
                                <label for="text-area">Comments</label>
                                <textarea className="form-control" id="text-area" />
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