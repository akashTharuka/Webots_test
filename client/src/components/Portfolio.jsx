import React from 'react';
import { images } from '../javascript/imageImports';

const Portfolio = () => {
    return(
        <section id="portfolio" className="my-5 p-4 container scroll-margin">
	
            <div className="row mt-5">
                <div className="col-lg-8 mx-auto text-center text-muted reveal-bottom">
                    <h2 className="topic display-6 section-heading text-white text-uppercase">
                        Showcase</h2>
                    <hr />
                </div>
            </div>

            <div className="container-fluid p-3 ">

                <div className="row my-5">
                    <div className="col-lg-8 mx-auto text-center text-muted reveal-rotate">
                        <hr />
                        <h2 className="topic lead section-heading text-white text-uppercase">
                            Year 2018</h2>
                        <hr />
                    </div>
                </div>

                <div id="awards2018" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#awards2018" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#awards2018" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#awards2018" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#awards2018" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#awards2018" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#awards2018" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-fluid d-block w-60 mx-auto" src={images.img_1} alt="" />
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid d-block w-60 mx-auto" src={images.img_2} alt="" />
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid d-block w-60 mx-auto" src={images.img_3} alt="" />
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid d-block w-60 mx-auto" src={images.img_4} alt="" />
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid d-block w-60 mx-auto" src={images.img_5} alt="" />
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid d-block w-60 mx-auto" src={images.img_6} alt="" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#awards2018" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#awards2018" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


				<div className="row my-5">
                    <div className="col-lg-8 mx-auto text-center text-muted reveal-rotate">
                        <hr />
                        <h2 className="topic lead section-heading text-white text-uppercase">
                            Year 2020</h2>
                        <hr />
                    </div>
                </div>

                <div id="awards2020" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#awards2020" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#awards2020" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#awards2020" data-bs-slide-to="2" aria-label="Slide 3"></button>
						<button type="button" data-bs-target="#awards2020" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-fluid d-block w-60 mx-auto" src={images.img_7} alt="" />
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid d-block w-60 mx-auto" src={images.img_8} alt="" />
                        </div>
						<div className="carousel-item">
                            <img className="img-fluid d-block w-60 mx-auto" src={images.img_9} alt="" />
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid d-block w-60 mx-auto" src={images.img_10} alt="" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#awards2020" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#awards2020" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
