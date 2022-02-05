import React from 'react';

const Timeline = () => {
    return(
        <section id="timeline" className="my-5 p-4 container shadow-lg reveal-bottom scroll-margin">
            <div className="row my-5">
                <div className="col-lg-8 mx-auto text-center text-muted">
                    <h2 className="topic display-6 section-heading text-white text-uppercase">
                        IESL RoboGames 2021 Event Timeline</h2>
                    <hr />
                </div>
            </div>

            {/* first section */}
            <div className="row align-items-center how-it-works d-flex">
                <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                    <div className="circle font-weight-bold">1</div>
                </div>
                <div className="col-6 text-muted reveal-left">
                    <h5 className="display-6">05<sup>th</sup> September</h5>
                    <p>Release Practise Platform</p>
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
                <div className="col-6 text-end text-muted reveal-right">
                    <h5 className="display-6">12<sup>th</sup> September</h5>
                    <p>Virtual Workshop</p>
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
                <div className="col-6  text-muted">
                    <h5 className="display-6 reveal-left">04<sup>th</sup> October</h5>
                    <p>Pre-Competition Project Review</p>
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
                <div className="col-6 text-end text-muted">
                    <h5 className="display-6 reveal-right">26<sup>th</sup> November</h5>
                    <p>Collecting the Simulated Files</p>
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
                <div className="col-6  text-muted">
                    <h5 className="display-6 reveal-left">28<sup>th</sup> November</h5>
                    <p>Competition Day</p>
                </div>
            </div>

        </section>
    );
};

export default Timeline;
