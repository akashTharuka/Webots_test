import React from 'react';
import { HashLink } from "react-router-hash-link";

import { images } from '../javascript/imageImports';

const Navbar = ({ gameday }) => {

    return(
        <nav id="navbar" className={`navbar navbar-expand-xl navbar-dark ${gameday ? '' : 'fixed-top'}`} role="navigation">
            <div className="container-fluid">
                {/* navbar brand */}
                <HashLink className="navbar-brand" smooth to="#page-top"><img  className="logo img-fluid" src={images.logo} alt="IESL Robogames 2020" /></HashLink>

                {/* toggle button for mobile nav */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* navbar links */}
                <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                    <ul className={`navbar-nav mx-auto ${gameday ? 'd-none' : ''}`}>
                        <li className="nav-item mx-3">
                            <HashLink className="nav-link" smooth to="#about">About</HashLink>
                        </li>
                        <li className="nav-item mx-3">
                            <HashLink className="nav-link" smooth to="#challengedetails">Challenge Details</HashLink>
                        </li>
                        <li className="nav-item mx-3">
                            <HashLink className="nav-link" smooth to="#timeline">Timeline</HashLink>
                        </li>
                        {/* <li className="nav-item mx-3">
                            <HashLink className="nav-link" smooth to="#register">Register</HashLink>
                        </li> */}
                        <li className="nav-item mx-3">
                            <HashLink className="nav-link" smooth to="#portfolio">Gallery</HashLink>
                        </li>
                        <li className="nav-item mx-3">
                            <HashLink className="nav-link" smooth to="#challenge">Challenge</HashLink>
                        </li>
                        <li className="nav-item mx-3">
                            <HashLink className="nav-link" smooth to="#organizedby">Organized By</HashLink>
                        </li>
                        <li className="nav-item mx-3">
                            <HashLink className="nav-link" smooth to="#contact">Contact Us</HashLink>
                        </li>
                    </ul>
                    <ul className={`navbar-nav ${gameday ? '' : 'd-none'}`}>
                        <li className="nav-item mx-3">
                            <HashLink className="nav-link text-uppercase" to="/">Home</HashLink>
                        </li>
                        <li className="nav-item mx-3">
                            <HashLink className="nav-link text-uppercase" to="#" data-bs-target="#leaderboardTabs" data-bs-toggle="modal" data-bs-dismiss="modal">Leaderboard</HashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
