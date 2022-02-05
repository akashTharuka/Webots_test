import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return(
        <section id="register" className="my-5 p-4 scroll-margin">
            <div className="container my-5">
                <div className="row mt-5">
                    <div className="col-lg-8 mx-auto text-center text-muted reveal-bottom">
                        <h2 className="topic display-6 section-heading text-white text-uppercase">
                            Register</h2>
                        <hr />
                        <Link className="neon-button btn btn-outline-warning p-3 px-5 my-5 mx-auto reveal-flip" to="#" target="_blank">Register Now!!!</Link>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-8 mx-auto text-center text-muted reveal-bottom">
                        <hr />
                        <h2 className="clock topic lead section-heading text-danger text-uppercase reveal-rotate">
                            Registration Closes In:</h2>
                        <hr />
                    </div>
                </div>
                <div className="clock-display row mt-5 justify-content-center">
                    <div className="col-sm-2 time-circle text-center reveal-rotate">
                        <p className="days display-5 text-warning"></p>
                        <span className="text-danger">days</span>
                    </div>
                    <div className="col-sm-2 time-circle text-center reveal-rotate-400">
                        <p className="hours display-5 text-warning"></p>
                        <span className="text-danger">hours</span>
                    </div>
                    <div className="col-sm-2 time-circle text-center reveal-rotate-600">
                        <p className="minutes display-5 text-warning"></p>
                        <span className="text-danger">minutes</span>
                    </div>
                    <div className="col-sm-2 time-circle text-center reveal-rotate-800">
                        <p className="seconds display-5 text-warning"></p>
                        <span className="text-danger">seconds</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
