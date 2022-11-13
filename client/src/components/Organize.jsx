import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../javascript/imageImports';

const Organize = () => {
    return(
        <section id="organizedby" className="my-5 p-4 scroll-margin">
            <div className="container text-center reveal-bottom">
                <div className="row mt-5 mb-2">
                    <div className="col-lg-8 mx-auto text-center text-muted reveal-bottom">
                        <h2 className="topic display-6 section-heading text-white text-uppercase">
                            Organized By</h2>
                        <hr />
                    </div>

                    <hr className="my-4" />
                    <p className="lead text-muted my-5 reveal-left">This competition is organized by The Institution of Engineers, Sri Lanka (IESL) in collaboration with the Department of Computer Science and Engineering, University of Moratuwa for school students on Robotics Technology. Institution of
                        Engineers, Sri Lanka (IESL) is the largest and the apex engineering body in the country. Established in 1956, currently it has an active membership around 16,000.The Information Technology and Computer Engineering Sectional Committee
                        of the IESL organizes this competition annually, to promote robotic technology among school students and to recognize their talents as the next generation of professionals in the country. University of Moratuwa is a leading university
                        in Sri Lanka which consists of four faculties. The Department of Computer Science and Engineering that belongs to the Faculty of Engineering is one of the two departments in Sri Lanka to offer an engineering degree in computer science.
                        Annually the department involves in organizing many events apart from the academic activities in order to improve the ICT knowledge and skills among the young students in Sri Lanka.</p>
                </div>
                
                <div className="row my-5 reveal-bottom">
                    <div className="col-lg-8 mx-auto text-center text-muted">
                        <h2 className="topic display-6 section-heading text-white text-uppercase">
                            Sponsored By</h2>
                        <hr />
                    </div>
                </div>
                <hr className="my-4" />
                <p className="lead text-muted my-5 reveal-left">Sri Lanka Telecom PLC is the Leading Digital Service provider and the No. 1 broadband and backbone infrastructure services provider in the country. The Company delivers cutting edge digital lifestyle services to all its customer segments.
                    For more information, visit <Link to="https://www.slt.lk">www.slt.lk</Link> </p>
				<div className="col-10 mx-auto my-4">
					<div className="col-6 col-md-3 m-auto reveal-rotate"><img src={images.slt} alt="SLT" className="img-fluid fa-file-image" style={{height: "16vh", width: "40vw"}} /></div>
				</div>
                <div className="row col-md-8 mx-auto mt-5">
                    <div className="col-6 col-md-3 m-auto reveal-rotate my-5"><img src={images.iesl} alt="IESL" className="img-fluid fa-file-image" style={{maxHeight: "85px"}} /></div>
                    <div className="col-6 col-md-3 m-auto reveal-rotate my-5" style={{maxHeight: "95px"}} ><img src={images.uom} alt="UOM" className="img-fluid fa-file-image" style={{maxHeight: "130px"}} /></div>
                    <div className="col-6 col-md-3 m-auto reveal-rotate my-5"><img src={images.cse} alt="CSE" className="img-fluid fa-file-image" style={{maxHeight: "85px"}} /></div>
                </div>


            </div>
        </section>
    );
};

export default Organize;
