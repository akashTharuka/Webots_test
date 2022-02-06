import React from 'react';
import { images } from '../javascript/imageImports';

const Leaderboard = ({type}) => {

    // console.log(type);

    return(
        <div className="modal fade" id={`${type}-leaderboard`} aria-hidden="true" aria-labelledby="leaderboardTabs" tabIndex="-1">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content leaderboard">
                    <div className="header">
                        <h5 className="modal-title display-6 text-muted text-center my-3 p-2 me-5 me-md-0" >{type} Leaderboard</h5>
                        <button type="button" className="btn close-btn p-3 m-1" data-bs-dismiss="modal" aria-label="Close">
                            <i className="bi bi-door-closed text-danger"></i>
                            <span className="text-warning d-none d-md-inline">EXIT</span>
                        </button>
                    </div>
                    <div className="modal-body leaderboard">
                        <div className="row text-center text-muted justify-content-center">
                            <div className="col-10 col-sm-4 second leaderboard">
                                <div className="card my-4 mx-2 mx-md-4">
                                    <div className="card-body text-light">
                                        <img src={images.second} alt="second place" className="img-fluid" />
                                        <h5 className="team-name lead text-uppercase">Robo-sapiens</h5>
                                        <h6 className={`team-${type} text-muted`}>University Of Moratuwa</h6>
                                        <span className="team-score text-success">80 points</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-sm-4 first leaderboard">
                                <div className="card my-4 mx-2 mx-md-4">
                                    <div className="card-body text-light">
                                        <img src={images.first} alt="first place" className="img-fluid" />
                                        <h5 className="team-name lead text-uppercase">Circuit Breakers</h5>
                                        <h6 className={`team-${type} text-muted`}>University Of Moratuwa</h6>
                                        <span className="team-score text-warning">86 points</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-sm-4 third leaderboard">
                                <div className="card my-4 mx-2 mx-md-4">
                                    <div className="card-body text-light">
                                        <img src={images.third} alt="third place" className="img-fluid" />
                                        <h5 className="team-name lead text-uppercase">Pitch Black</h5>
                                        <h6 className={`team-${type} text-muted`}>University Of Moratuwa</h6>
                                        <span className="team-score text-primary">75 points</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-4 mx-auto text-muted justify-content-center">
                            <table className="table align-middle table-dark table-striped table-hover table-borderless col-8 mx-5 text-center">
                                <thead className="lead text-muted">
                                    <tr>
                                        <th scope="col">Rank</th>
                                        <th scope="col">Teams</th>
                                        <th scope="col">Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#4</td>
                                        <td>
                                            <p className="team-name text-danger">MARS</p>
                                            <small className={`${type}-name text-warning`}>UNIVERSITY OF MORATUWA</small>
                                        </td>
                                        <td>50</td>
                                    </tr>
                                    <tr>
                                        <td>#5</td>
                                        <td>
                                            <p className="team-name text-danger">TECHNOLOGIC</p>
                                            <small className={`${type}-name text-warning`}>UNIVERSITY OF MORATUWA</small>
                                        </td>
                                        <td>43</td>
                                    </tr>
                                    <tr>
                                        <td>#6</td>
                                        <td>
                                            <p className="team-name text-danger">TEAM MOMENTUM</p>
                                            <small className={`${type}-name text-warning`}>UNIVERSITY OF MORATUWA</small>
                                        </td>
                                        <td>32</td>
                                    </tr>
                                    <tr>
                                        <td>#7</td>
                                        <td>
                                            <p className="team-name text-danger">TEAM RAVANA</p>
                                            <small className={`${type}-name text-warning`}>UNIVERSITY OF COLOMBO SCHOOL OF COMPUTING</small>
                                        </td>
                                        <td>23</td>
                                    </tr>
                                    <tr>
                                        <td>#8</td>
                                        <td>
                                            <p className="team-name text-danger">CLASSIC</p>
                                            <small className={`${type}-name text-warning`}>UNIVERSITY OF RUHUNA</small>
                                        </td>
                                        <td>21</td>
                                    </tr>
                                    <tr>
                                        <td>#9</td>
                                        <td>
                                            <p className="team-name text-danger">TOSTER</p>
                                            <small className={`${type}-name text-warning`}>UNIVERSITY OF SRI JAYEWARDENEPURA</small>
                                        </td>
                                        <td>10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
