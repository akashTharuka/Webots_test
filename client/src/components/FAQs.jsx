import React from 'react';

const FAQs = () => {
	return (
		<div className='FAQ-section row text-white' id='FAQs'>
			<h2 className="topic display-6 section-heading text-white text-uppercase">FAQ' <small>s</small></h2>
			<hr className="my-4" />
			<div className="col-10 col-md-6 mx-auto my-5">
				<div className="accordion accordion-flush" id="accordianFlushFaqs">
					<div className="accordion-item my-3 bg-dark rounded-3">
						<h2 className="accordion-header" id="flush-headingOne">
							<button className="accordion-button collapsed bg-dark rounded-3 slt-green" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
								<span className="text-center w-100">Who can join ?</span>
							</button>
						</h2>
						<div id="flush-collapseOne" className="accordion-collapse collapse my-2" aria-labelledby="flush-headingOne" data-bs-parent="#accordianFlushFaqs">
							<div className="accordion-body">
								If you are interested in <strong>learning more about Webots platform and competing with others,</strong> then this competition is for you. 
							</div>
						</div>
					</div>
					<div className="accordion-item my-3 bg-dark rounded-3">
						<h2 className="accordion-header" id="flush-headingTwo">
							<button className="accordion-button collapsed bg-dark rounded-3 slt-green" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
								<span className="text-center w-100">How can I join ?</span>
							</button>
						</h2>
						<div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordianFlushFaqs">
							<div className="accordion-body">
								You can visit out website. <a href="http://robo.cse.mrt.ac.lk" className='text-warning'>robo.cse.mrt.ac.lk</a> and click on "Register". <br />(Yeah, you are in that website)
							</div>
						</div>
					</div>
					<div className="accordion-item my-3 bg-dark rounded-3">
						<h2 className="accordion-header" id="flush-headingThree">
						<button className="accordion-button collapsed bg-dark rounded-3 slt-green" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
							<span className="text-center w-100">Are there any workshops for beginners ?</span>
						</button>
						</h2>
						<div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordianFlushFaqs">
							<div className="accordion-body">
								We are conducting a series of workshops to cover the <strong>basics of Python programming and Webots</strong> for beginners. So even if you are new to programming, you can compete in the competition.
							</div>
						</div>
					</div>
					<div className="accordion-item my-3 bg-dark rounded-3">
						<h2 className="accordion-header" id="flush-headingFour">
						<button className="accordion-button collapsed bg-dark rounded-3 slt-green" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
							<span className="text-center w-100">Is the competition physical or virtual ?</span>
						</button>
						</h2>
						<div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordianFlushFaqs">
							<div className="accordion-body">
								The competition is held virtually on the "Webots" platform. But there is a physical event for finalists.
							</div>
						</div>
					</div>
					<div className="accordion-item my-3 bg-dark rounded-3">
						<h2 className="accordion-header" id="flush-headingFive">
						<button className="accordion-button collapsed bg-dark rounded-3 slt-green" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
							<span className="text-center w-100">What are the benefits of joining ?</span>
						</button>
						</h2>
						<div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordianFlushFaqs">
							<div className="accordion-body">
								All the participants will be awarded a <strong>valuable certificate,</strong> and the winners will get <strong>cash prizes.</strong>
							</div>
						</div>
					</div>
					<div className="accordion-item my-3 bg-dark rounded-3">
						<h2 className="accordion-header" id="flush-headingSix">
						<button className="accordion-button collapsed bg-dark rounded-3 slt-green" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
							<span className="text-center w-100">How to form a team ?</span>
						</button>
						</h2>
						<div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordianFlushFaqs">
							<div className="accordion-body">
								There can be <strong>up to 5 members for a school team</strong> and <strong>up to 3 members for a university team.</strong> Appoint a coordinator for the team. (A teacher for a school team and a lecturer for a university team)
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FAQs;