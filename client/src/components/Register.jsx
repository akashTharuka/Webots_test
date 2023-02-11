import React, { useState } from 'react';
import Countdown from './Countdown';

const Register = () => {

    const [finished, setFinished] = useState(true);
	const time = "Feb 10, 2023 8:34:00";

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
                        <a className={`neon-button btn btn-outline-warning p-3 px-5 my-5 mx-auto reveal-flip ${!finished ? '' : 'd-none'}`} href="https://docs.google.com/forms/d/e/1FAIpQLSdTov_Bw07pc_YQXncAB7Xou6V0qT36eL9AnAFLeooB7ADoaw/viewform " target="_blank" rel='noreferrer'>Register Now!!!</a>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-8 mx-auto text-center text-muted reveal-bottom">
                        <hr />
                        <h2 className="clock topic lead section-heading text-danger text-uppercase reveal-rotate">
                            {!finished ? 'Registration Closes In:' : 'Registration Closed'}
                        </h2>
                        <hr />
                    </div>
                </div>
                <Countdown setFinished={setFinished} time={time}/>
            </div>
        </section>
    );
};

export default Register;
