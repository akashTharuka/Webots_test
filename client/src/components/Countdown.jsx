import React, { useState, useEffect } from 'react';

const Countdown = ({ setFinished, time }) => {

	const calculateTimeLeft = () => {
        let countDownDate = new Date(time).getTime();

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
			setFinished(calculateTimeLeft().finished);
        }, 1000);

        return () => clearTimeout(timer);
    });

	return (
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
	);
}

export default Countdown;