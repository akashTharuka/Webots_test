import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../javascript/imageImports';

const Header = () => {
    return(
        <header className="text-center text-white d-flex" style={{backgroundImage: `url(${images.background})`}}>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 col-lg-8 mx-auto my-5">
                        <h1 className="topic text-uppercase display-1">IESL RoboGames 2022</h1>
                    </div>
                    <div className="col-10 col-lg-8 mx-auto my-3">
                        <figure>
                            <blockquote className="blockquote">
                            <p className="my-2">Obstacles don't have to stop you. If you run into a wall, don't turn around and give up. Figure out how to climb it, or work around it.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Michael Jordan
                            </figcaption>
                        </figure>
                        <Link className="neon-button btn btn-outline-warning p-3 px-5 my-5" to="/goLive">Go Live!</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
