import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logos/IESL_Logo_2021.png';

const Navbar = () => {
    return(
        <nav id="navbar" className="navbar navbar-expand-xl navbar-dark" role="navigation">
            <div className="container-fluid">
                {/* navbar brand */}
                <Link className="navbar-brand" to="#page-top"><img  className="logo img-fluid" src={logo} alt="IESL Robogames 2020" /></Link>

                {/* toggle button for mobile nav */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* navbar links */}
                <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="#about">About</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="#challengedetails">Challenge Details</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="#timeline">Timeline</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="#register">Register</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="#portfolio">Gallery</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="#challenge">Challenge</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="#organizedby">Organized By</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="#contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
