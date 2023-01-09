import React from 'react';

// import homepage sections
import Navbar from './Navbar';
import  Header  from './Header';
import About from './About';
import ChallengeDetails from './ChallengeDetails';
import Timeline from './Timeline';
import Register from './Register';
import Challenge from './Challenge';
import Organize from './Organize';
import Portfolio from './Portfolio';
import Contact from './Contact';

import { handleReveal } from '../javascript/scrolling';

export class Homepage extends React.Component{
	
	componentDidMount(){
		handleReveal();
	}

	render(){
		return(
			<div className='main'>
				<Navbar gameday={0} />
				<Header />
				<Register />
				<About />
				<ChallengeDetails />
				<Timeline />
				<Portfolio />
				<Challenge />
				<Organize />
				<Contact />
			</div>
		);
	}
}


export default Homepage;
