import React from 'react';

// import homepage sections
import  Header  from './Header';
import About from './About';
import ChallengeDetails from './ChallengeDetails';
import Timeline from './Timeline';
import Register from './Register';
import Challenge from './Challenge';
import Organize from './Organize';
import Contact from './Contact';
import Portfolio from './Portfolio';

import { handleReveal } from '../javascript/scrolling';
import { countdown } from '../javascript/countdown'; 
import { splitScreenSlider } from '../javascript/splitScreenSlider';

export class Homepage extends React.Component{
	
	componentDidMount(){

		handleReveal();
		countdown();
		splitScreenSlider();
	}

	render(){
		return(
			<div className='main'>
				<Header />
				<About />
				<ChallengeDetails />
				<Timeline />
				<Register />
				<Portfolio />
				<Challenge />
				<Organize />
				<Contact />
			</div>
		);
	}
}


export default Homepage;
