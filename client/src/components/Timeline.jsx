import React from 'react';
// import { Link } from 'react-router-dom';
import Python_Session from '../resources/Python Session Slides.pdf';
import { images } from '../javascript/imageImports';

const Timeline = () => {
    return(
        <section id="timeline" className="my-5 p-4 container shadow-lg reveal-bottom scroll-margin">
            <div className="row my-5">
                <div className="col-lg-8 mx-auto text-center text-muted">
                    <h2 className="topic display-6 section-heading text-white text-uppercase">
                        IESL RoboGames 2022 Event Timeline</h2>
                    <hr />
                </div>
            </div>

            {/* first section */}
            <div className="row align-items-center how-it-works d-flex">
                <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                    <div className="circle font-weight-bold">1</div>
                </div>
                <div className="col-10 col-lg-6 text-muted reveal-left">
                    <h5 className="display-6 slt-green">05<sup>th</sup> November</h5>
                    <p className='slt-blue'>Session 01: Introduction to Programming</p>
					<small>This session is for anyone who is new to programming and is interested to take part in RoboGames. Everything from the basic fundamentals will be covered briefly. Practice question along with solutions will be provided for them to try out.</small>
                </div>
				<div className=" col-10 col-lg-4 session-details text-muted mx-auto">
					<div className="wrapper d-flex flex-column position-relative">
						<img src={images.blob2} alt="blob2" className='blob1'/>
						<button className='btn btn-transparent session-link px-0 position-absolute d-flex flex-column'>
							<a className='text-dark fs-6 my-2' href="https://dms.uom.lk/s/9z5E8ymgrF4jdSi" target="_blank" rel='noreferrer'>Recording 01
								<i className="fa fa-arrow-right ms-3" aria-hidden="true"></i>
							</a>
							<a className='text-dark fs-6 my-2' target="_blank" rel='noreferrer' href={Python_Session} download="Session.pdf">
								<i className="fa fa-arrow-left me-3" aria-hidden="true"></i>
								Slides
							</a>
						</button>
					</div>
				</div>
            </div>
            {/* path between 1-2 */}
            <div className="row timeline">
                <div className="col-2">
                    <div className="corner top-right"></div>
                </div>
                <div className="col-8">
                    <hr/>
                </div>
                <div className="col-2">
                    <div className="corner left-bottom"></div>
                </div>
            </div>
            {/* second section */}
            <div className="row align-items-center justify-content-end how-it-works d-flex">
				<div className=" col-10 col-lg-4 session-details text-muted mx-auto">
					<div className="wrapper d-flex flex-column position-relative">
						<img src={images.blob1} alt="blob1" className='blob1'/>
						<button className='btn btn-transparent session-link px-0 position-absolute d-flex flex-column'>
							<a className='text-dark fs-6 my-2' href="https://dms.uom.lk/s/ZaWS4JCoFxLFiPD" target="_blank" rel='noreferrer'>Recording 02
								<i className="fa fa-arrow-right ms-3" aria-hidden="true"></i>
							</a>
							<a className='text-dark fs-6 my-2' target="_blank" rel='noreferrer' href={Python_Session} download="Session.pdf">
								<i className="fa fa-arrow-left me-3" aria-hidden="true"></i>
								Slides
							</a>
						</button>
					</div>
				</div>
                <div className="col-10 col-lg-6 text-end text-muted reveal-right">
                    <h5 className="display-6 slt-green">06<sup>th</sup> November</h5>
                    <p className='slt-blue'>Session 02: Introduction to Python Programming</p>
					<small>Anyone who knows the fundamental concepts in programming and not familiar with the Python language can join this session and learn the basic syntax and the python knowledge necessary to handle the Webot platform</small>
                </div>
                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                    <div className="circle font-weight-bold">2</div>
                </div>
            </div>
            {/* path between 2-3 */}
            <div className="row timeline">
                <div className="col-2">
                    <div className="corner right-bottom"></div>
                </div>
                <div className="col-8">
                    <hr/>
                </div>
                <div className="col-2">
                    <div className="corner top-left"></div>
                </div>
            </div>
            {/* third section */}
            <div className="row align-items-center how-it-works d-flex">
                <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                    <div className="circle font-weight-bold">3</div>
                </div>
                <div className="col-10 col-lg-6  text-muted">
                    <h5 className="display-6 reveal-left slt-green">12<sup>th</sup> November</h5>
                    <p className='slt-blue'>Sesson 03: Introduction to Robotics and Webots</p>
					<small>In this session, the webot platform will be introduced along with the fundamentals of Robotics</small>
                </div>
				<div className=" col-10 col-lg-4 session-details text-muted mx-auto">
					<div className="wrapper d-flex flex-column position-relative">
						<img src={images.blob3} alt="blob3" className='blob1'/>
						<button className='btn btn-transparent session-link px-0 position-absolute d-flex flex-column'>
							<a className='text-dark fs-6 my-2' href="https://dms.uom.lk/s/ALwy4DsagGYgRMf" target="_blank" rel='noreferrer'>Recording 03
								<i className="fa fa-arrow-right ms-3" aria-hidden="true"></i>
							</a>
							{/* <a className='text-dark fs-6 my-2' target="_blank" rel='noreferrer' href={Python_Session} download="Session.pdf">
								<i className="fa fa-arrow-left me-3" aria-hidden="true"></i>
								Slides
							</a> */}
						</button>
					</div>
				</div>
            </div>

            {/* path between 3-4 */}
            <div className="row timeline">
                <div className="col-2">
                    <div className="corner top-right"></div>
                </div>
                <div className="col-8">
                    <hr/>
                </div>
                <div className="col-2">
                    <div className="corner left-bottom"></div>
                </div>
            </div>
            {/* fourth section */}
            <div className="row align-items-center justify-content-end how-it-works d-flex">
				<div className=" col-10 col-lg-4 session-details text-muted mx-auto">
					<div className="wrapper d-flex flex-column position-relative">
						<img src={images.blob4} alt="blob4" className='blob1'/>
						<button className='btn btn-transparent session-link px-0 position-absolute d-flex flex-column'>
							<a className='text-dark fs-6 my-2' href="https://dms.uom.lk/s/g9y2XDp737W3NWp" target="_blank" rel='noreferrer'>Recording 04
								<i className="fa fa-arrow-right ms-3" aria-hidden="true"></i>
							</a>
							{/* <a className='text-dark fs-6 my-2' target="_blank" rel='noreferrer' href={Python_Session} download="Session.pdf">
								<i className="fa fa-arrow-left me-3" aria-hidden="true"></i>
								Slides
							</a> */}
						</button>
					</div>
				</div>
                <div className="col-10 col-lg-6 text-end text-muted">
                    <h5 className="display-6 reveal-right slt-green">13<sup>th</sup> November</h5>
                    <p className='slt-blue'>RoboGames Introductory Session</p>
					<small>Introduce the RoboGames competition, the challenge lineup and the prizes. Also do a small experience sharing session with the help of past RoboGames champions</small>
                </div>
                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                    <div className="circle font-weight-bold">4</div>
                </div>
            </div>

            {/* path between 4-5 */}
            <div className="row timeline">
                <div className="col-2">
                    <div className="corner right-bottom"></div>
                </div>
                <div className="col-8">
                    <hr/>
                </div>
                <div className="col-2">
                    <div className="corner top-left"></div>
                </div>
            </div>
            {/* fifth section */}
            <div className="row align-items-center how-it-works d-flex">
                <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                    <div className="circle font-weight-bold">5</div>
                </div>
                <div className="col-10 col-lg-6 text-muted">
                    <h5 className="display-6 reveal-left slt-green">14<sup>th</sup> November</h5>
                    <p className='slt-blue'>Issue the Initial Challenge</p>
					<small>This is an offline challenge given to the participants to get an idea about the upcoming competition. They will get a chance to submit their solution and depending on the feedback they can refine their solution. This will not be evaluated.</small>
                </div>
            </div>
			{/* path between 5-6 */}
            <div className="row timeline">
                <div className="col-2">
                    <div className="corner top-right"></div>
                </div>
                <div className="col-8">
                    <hr/>
                </div>
                <div className="col-2">
                    <div className="corner left-bottom"></div>
                </div>
            </div>
			{/* sixth section */}
            <div className="row align-items-center justify-content-end how-it-works d-flex">
                <div className="col-10 col-lg-6 text-end text-muted">
                    <h5 className="display-6 reveal-right slt-green">21<sup>st</sup> November</h5>
                    <p className='slt-blue'>Mid Feedback Session</p>
					<small></small>
                </div>
                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                    <div className="circle font-weight-bold">6</div>
                </div>
            </div>
			{/* path between 6-7 */}
            <div className="row timeline">
                <div className="col-2">
                    <div className="corner right-bottom"></div>
                </div>
                <div className="col-8">
                    <hr/>
                </div>
                <div className="col-2">
                    <div className="corner top-left"></div>
                </div>
            </div>
            {/* seventh section */}
            <div className="row align-items-center how-it-works d-flex">
                <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                    <div className="circle font-weight-bold">7</div>
                </div>
                <div className="col-10 col-lg-6 text-muted">
                    <h5 className="display-6 reveal-left slt-green">28<sup>th</sup> November</h5>
                    <p className='slt-blue'>Final Feedback Session</p>
					<small></small>
                </div>
            </div>
			{/* path between 7-8 */}
            <div className="row timeline">
                <div className="col-2">
                    <div className="corner top-right"></div>
                </div>
                <div className="col-8">
                    <hr/>
                </div>
                <div className="col-2">
                    <div className="corner left-bottom"></div>
                </div>
            </div>
			{/* eighth section */}
            <div className="row align-items-center justify-content-end how-it-works d-flex">
                <div className="col-10 col-lg-6 text-end text-muted">
                    <h5 className="display-6 reveal-right slt-green">29<sup>st</sup> November</h5>
                    <p className='slt-blue'>Issue the Final Challenge</p>
					<small></small>
                </div>
                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                    <div className="circle font-weight-bold">8</div>
                </div>
            </div>
			{/* path between 8-9 */}
            <div className="row timeline">
                <div className="col-2">
                    <div className="corner right-bottom"></div>
                </div>
                <div className="col-8">
                    <hr/>
                </div>
                <div className="col-2">
                    <div className="corner top-left"></div>
                </div>
            </div>
            {/* ninth section */}
            <div className="row align-items-center how-it-works d-flex">
                <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                    <div className="circle font-weight-bold">9</div>
                </div>
                <div className="col-10 col-lg-6 text-muted">
                    <h5 className="display-6 reveal-left slt-green">08<sup>th</sup> December</h5>
                    <p className='slt-blue'>IESL RoboGames Challenge 2022</p>
					<small></small>
                </div>
            </div>
			{/* path between 9-10 */}
            <div className="row timeline">
                <div className="col-2">
                    <div className="corner top-right"></div>
                </div>
                <div className="col-8">
                    <hr/>
                </div>
                <div className="col-2">
                    <div className="corner left-bottom"></div>
                </div>
            </div>
			{/* tenth section */}
            <div className="row align-items-center justify-content-end how-it-works d-flex">
                <div className="col-10 col-lg-6 text-end text-muted">
                    <h5 className="display-6 reveal-right slt-green">TBD</h5>
                    <p className='slt-blue'>Awarding Ceremony</p>
					<small></small>
                </div>
                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                    <div className="circle font-weight-bold">10</div>
                </div>
            </div>

        </section>
    );
};

export default Timeline;
