import React from 'react';
import { images } from '../javascript/imageImports';

const About = () => {
  return(
    <section id="about" className="my-5 p-4 scroll-margin">
        <section id="wrapper" className="skewed">
            <div className="layer bottom-section">
                <div className="content-wrap">
                    <div className="content-body mx-lg-4 p-4">
                        <h2 className="topic display-6 section-heading text-muted text-uppercase reveal-right">Purpose</h2>
                        <hr className="light my-4" />
                        <p className="my-4 reveal-right text-muted">Most of the Sri Lankan students are interested in robotics technology the main constraint for them is lack of knowledge and facilities. Only very few schools have well equipped ICT laboratories, electronic equipment and resources
                            persons. Main idea of organizing this event is to provide assistance for students to learn the art of robot development and ultimately give them an opportunity to make use of what they have learnt and showcase their talents.</p>
                    </div>
                    <img src={images.bumblebee} alt="pc1" />
                </div>
            </div>

            <div className="layer top-section">
                <div className="content-wrap">
                    <div className="content-body mx-lg-4 p-4">
                        <h2 className="topic display-6 section-heading text-dark text-uppercase reveal-left">About IESL Robogames</h2>
                        <hr className="light my-4" />
                        <p className="my-4 reveal-left">&quot;IESL RoboGames&quot; is an annual competition organized by the Information Technology and Communications Engineering Sectional Committee of the Institution of Engineers, Sri Lanka in collaboration with Department of Computer
                            Science and Engineering, University of Moratuwa, with the objective of promoting and recognizing the talents and skills of the next generation of professionals. The competition will be held in two categories; School Category
                            and Undergraduate Category. For the school category there will be a series of workshops and awareness programs held in order to introduce the concept of robotics into school&apos;s educational activities. This will provide
                            an opportunity to promote their creativity and improve their learning efficiency, encouraging them to be future engineers and inventors.</p>
                    </div>
                    <img src={images.bumblebee} alt="pc1" />
                </div>
            </div>

            <div className="handle-one"></div>
            <div className="handle-two"></div>
        </section>

        <div className="container d-md-none">
            <div className="row mt-5">
                <div className="col-lg-8 mx-auto text-center text-muted reveal-bottom">
                    <h2 className="topic display-6 section-heading text-white text-uppercase">About IESL Robogames</h2>
                    <hr className="light my-4" />
                    <p className="my-4">&quot;IESL RoboGames&quot; is an annual competition organized by the Information Technology and Communications Engineering Sectional Committee of the Institution of Engineers, Sri Lanka in collaboration with Department of Computer
                        Science and Engineering, University of Moratuwa, with the objective of promoting and recognizing the talents and skills of the next generation of professionals. The competition will be held in two categories; School Category
                        and Undergraduate Category. For the school category there will be a series of workshops and awareness programs held in order to introduce the concept of robotics into school&apos;s educational activities. This will provide
                        an opportunity to promote their creativity and improve their learning efficiency, encouraging them to be future engineers and inventors.</p>

                    <h2 className="topic display-6 section-heading text-white text-uppercase">Purpose</h2>
                    <hr className="light my-4" />
                    <p className="my-4">Most of the Sri Lankan students are interested in robotics technology the main constraint for them is lack of knowledge and facilities. Only very few schools have well equipped ICT laboratories, electronic equipment and resources
                        persons. Main idea of organizing this event is to provide assistance for students to learn the art of robot development and ultimately give them an opportunity to make use of what they have learnt and showcase their talents.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
