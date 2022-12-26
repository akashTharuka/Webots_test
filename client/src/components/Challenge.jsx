import React from 'react';
import { Link } from 'react-router-dom';
import challenge_pdf from '../resources/IESL Robogames - Final Challenge - version 3.pdf';
import challenge_zip from '../resources/IESL Robogames 2022 final challenge - version 3.rar';

const Challenge = () => {
    return(
        <section id="challenge" className="my-5 p-4 scroll-margin reveal-bottom">
            <div className="container challenge">
                    
                <div className="row mt-5 mb-2">
                    <div className="col-lg-8 mx-auto text-center text-muted reveal-bottom">
                        <h2 className="topic display-6 section-heading text-white text-uppercase">
                            Challenge</h2>
                        <hr />
                    </div>
                </div>

                <div className="row justify-content-between">

                    <div className="row mt-5 reveal-flip">
                        <div className="col-lg-8 mx-auto text-center text-muted reveal-bottom">
                            <hr />
                            <h2 className="topic lead section-heading text-white text-uppercase">
                                Task Documents</h2>
                            <hr />
                        </div>
                    </div>

                    <div className="col-lg-6 mx-auto my-3 text-center">
                        <a className="neon-button-three btn p-3 px-5 mt-3 mx-4 btn-lg reveal-right" href={challenge_pdf} target="_blank" rel='noreferrer' download>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Challenge Description</a>
                        <a className="neon-button-three btn p-3 px-5 mt-3 mx-4 btn-lg reveal-left" href={challenge_zip}  target="_blank" rel='noreferrer' download>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Challenge Files</a>
                    </div>

                </div> 

                {/* <div className="row justify-content-between">

                    <div className="row mt-5 reveal-flip">
                        <div className="col-lg-8 mx-auto text-center text-muted reveal-bottom">
                            <hr />
                            <h2 className="topic lead section-heading text-white text-uppercase">
                                Practice Documents</h2>
                            <hr />
                        </div>
                    </div>

                    <div className="col-lg-6 mx-auto my-3 text-center">
                        <Link className="neon-button-three btn p-3 px-5 mt-3 mx-4 btn-lg reveal-right" to="resources/Practice-Platform-Guidelines.pdf" target="_blank">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Download PDF</Link>
                    </div>
                    
                </div> */}
				{/* <div className="lead topic text-uppercase text-warning text-center my-5">Will be available soon!!!</div> */}
            </div>
        </section>
    );
};

export default Challenge;
