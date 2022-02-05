import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return(
        <section id="contact" className="my-5 p-4 scroll-margin">
            <div className="container text-center reveal-bottom">
                <div className="row text-muted">
                    <h2 className="topic display-6 section-heading text-white text-uppercase">
                        Contact Us</h2>
                    <hr className="my-4" />
                    <div className="col-sm-8 col-md-6 mx-0 text-start">
                        
                        <p className="lead text-muted my-4">For further inquiries and clarifications, feel free to contact us.</p>
                        <address className="lead text-warning my-4">
                            Department of Computer Science and Engineering,<br />
                            University of Moratuwa,<br />
                            Katubedda,<br />
                            Sri Lanka.
                        </address>

                        <div className="icons my-4 d-flex">
                            <Link to="https://www.facebook.com/pg/ieslrobogame/" className="me-4"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="mailto:rob@cse.mrt.ac.lk" className="me-4"><i className="fas fa-envelope"></i></Link>
                            <Link to="https://wa.me/+94715694899" className="me-4"><i className="fab fa-whatsapp"></i></Link>
                        </div>

                    </div>

                    <div className="col-sm-8 col-md-6 mx-0 my-4 text-start">
                        
                        <form className="my-1">
                            <label htmlFor="email" className="form-label">Email Address:</label>
                            <div className="input-group mb-2">
                                <span className="input-group-text">
                                    <i className="bi bi-envelope-fill text-secondary"></i>
                                </span>
                                <input type="text" id="email" className="form-control" placeholder="e.g. mario@example.com" />
                                {/* tooltip */}
                                <span className="input-group-text">
                                    <span className="tt" data-bs-placement="bottom" title="Enter an email address we can reply to.">
                                    <i className="bi bi-question-circle text-muted"></i>
                                    </span>
                                </span>
                            </div>

                            <label htmlFor="name" className="form-label">Name:</label>
                            <div className="mb-2 input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-person-fill text-secondary"></i>
                                </span>
                                <input type="text" id="name" className="form-control" placeholder="e.g. Mario" />
                                {/* tooltip */}
                                <span className="input-group-text">
                                    <span className="tt" data-bs-placement="bottom" title="Pretty self explanatory really...">
                                    <i className="bi bi-question-circle text-muted"></i>
                                    </span>
                                </span>
                            </div>

                            <div className="mb-1 mt-5 form-floating">
                                <textarea className="form-control" id="query" style={{height: "140px"}} placeholder="query"></textarea>
                                <label htmlFor="query">Your query...</label>
                            </div>
                            <div className="mb-4 text-center">
                                <button type="submit" className="neon-button btn btn-outline-warning py-2 px-5 my-4">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
