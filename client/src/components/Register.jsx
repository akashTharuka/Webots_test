import React, { useState, useEffect } from 'react';

const Register = () => {

    const calculateTimeLeft = () => {
        let countDownDate = new Date("Nov 11, 2022 10:30:00").getTime();

        let now = new Date().getTime();

        let difference = countDownDate - now;

        let timeleft = {finished: true}

        if (difference > 0){
            timeleft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
                finished: false
            };
        }

        return timeleft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    // console.log(timeLeft);

    return(
        <section id="register" className="my-5 p-4 scroll-margin">
            <div className="container my-5">
                <div className="row mt-5">
                    <div className="col-lg-8 mx-auto text-center text-muted reveal-bottom">
                        <h2 className="topic display-6 section-heading text-white text-uppercase">
                            Register</h2>
                        <hr />
						<p className='lead slt-blue'>If you are a robotics enthusiast who is eagerly waiting to showcase your skills, this the best opportunity for you. 
Even if you are a beginner, we got you covered! The introductory workshop series will get you right on track in no time!
						</p>
						<p className='slt-green'>*So hurry up and get your team registered now!*</p>
                        <a className={`neon-button btn btn-outline-warning p-3 px-5 my-5 mx-auto reveal-flip ${!timeLeft.finished ? '' : 'd-none'}`} href="https://docs.google.com/forms/d/e/1FAIpQLSdTov_Bw07pc_YQXncAB7Xou6V0qT36eL9AnAFLeooB7ADoaw/viewform " target="_blank" rel='noreferrer'>Register Now!!!</a>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-8 mx-auto text-center text-muted reveal-bottom">
                        <hr />
                        <h2 className="clock topic lead section-heading text-danger text-uppercase reveal-rotate">
                            {!timeLeft.finished ? 'Registration Closes In:' : 'Registration Closed'}
                        </h2>
                        <hr />
                    </div>
                </div>
                <div className={`clock-display row mt-5 justify-content-center ${!timeLeft.finished ? '' : 'd-none'}`}>
                    <div className="col-sm-2 time-circle text-center reveal-rotate">
                        <p className="days display-5 text-warning">{ timeLeft.days }</p>
                        <span className='slt-green'>days</span>
                    </div>
                    <div className="col-sm-2 time-circle text-center reveal-rotate-400">
                        <p className="hours display-5 text-warning">{ timeLeft.hours }</p>
                        <span className='slt-green'>hours</span>
                    </div>
                    <div className="col-sm-2 time-circle text-center reveal-rotate-600">
                        <p className="minutes display-5 text-warning">{ timeLeft.minutes }</p>
                        <span className='slt-green'>minutes</span>
                    </div>
                    <div className="col-sm-2 time-circle text-center reveal-rotate-800">
                        <p className="seconds display-5 text-warning">{ timeLeft.seconds }</p>
                        <span className='slt-green'>seconds</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
