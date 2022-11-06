import React from 'react';
import { images } from '../javascript/imageImports';

const ChallengeDetails = () => {
    return(
        <section id="challengedetails" className="my-5 p-4 scroll-margin">
                        
            <div className="fixed-background py-5">
                <div className="container challenge-details reveal-bottom">
                    <div className="row my-5">
                        <div className="col-md-12 mx-auto text-center text-muted">
                            <h2 className="topic display-6 section-heading text-white text-uppercase">Challenge Details</h2>
                            <hr className="light my-4" />
                            <p className="my-4 text-light">This competition is based on a robot simulation software. The software offers a prototyping environment that provides the user with necessary virtual hardware
                                and the programming capability. Competitors are expected to provide solutions to the given task by utilizing these tools. Click the below button to download the simulation software without data charge. To find out more
                                about the software visit the webot site.</p>
                            <div>
                                {/* <Link className="neon-button-two btn btn-outline-warning p-3 px-5 mt-3 mx-4 btn-lg reveal-bottom" to="#" target="_blank">Download the Software!</Link> */}
                                <a className="neon-button-two btn btn-outline-warning p-3 px-5 mt-3 mx-4 btn-lg reveal-bottom" href="https://cyberbotics.com/" target="_blank" rel='noreferrer'>Visit the Webot Site!</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* keep this empty and here. This is for the fixed background part */}
                <div className="fixed-wrap">
                    <div className="fixed" style={{backgroundImage: `url(${images.fixedBackground})`}}>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default ChallengeDetails;
