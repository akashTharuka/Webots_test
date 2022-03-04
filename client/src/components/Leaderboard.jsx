import React from 'react';
import { images } from '../javascript/imageImports';

const Leaderboard = ({type, leaderboard}) => {

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

                        {/* first second third places in the leaderboard */}
                        <div className="row text-center text-muted justify-content-center">

                            <div className="col-10 col-sm-4 second leaderboard">
                                <div className="card my-4 mx-2 mx-md-4">
                                    <div className="card-body text-light">
                                        <img src={images.second} alt="second place" className="img-fluid" />
                                        <h5 className="team-name lead text-uppercase">{leaderboard[1] ? leaderboard[1].teamName : "empty"}</h5>
                                        <h6 className={`team-${type} text-muted`}>{leaderboard[1] ? leaderboard[1].name : "empty"}</h6>
                                        <span className="team-score text-success">{leaderboard[1] ? leaderboard[1].score : 0} points</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-10 col-sm-4 first leaderboard">
                                <div className="card my-4 mx-2 mx-md-4">
                                    <div className="card-body text-light">
                                        <img src={images.first} alt="first place" className="img-fluid" />
                                        <h5 className="team-name lead text-uppercase">{leaderboard[0] ? leaderboard[0].teamName : "empty"}</h5>
                                        <h6 className={`team-${type} text-muted`}>{leaderboard[0] ? leaderboard[0].name : "empty"}</h6>
                                        <span className="team-score text-warning">{leaderboard[0] ? leaderboard[0].score : 0} points</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-10 col-sm-4 third leaderboard">
                                <div className="card my-4 mx-2 mx-md-4">
                                    <div className="card-body text-light">
                                        <img src={images.third} alt="third place" className="img-fluid" />
                                        <h5 className="team-name lead text-uppercase">{leaderboard[2] ? leaderboard[2].teamName : "empty"}</h5>
                                        <h6 className={`team-${type} text-muted`}>{leaderboard[2] ? leaderboard[2].name : "empty"}</h6>
                                        <span className="team-score text-primary">{leaderboard[2] ? leaderboard[2].score : 0} points</span>
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
                                    {
                                        leaderboard.map((element, index) => {
                                            if(index > 2){
                                                return(
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <p className="team-name text-danger">{element ? element.teamName : "empty"}</p>
                                                            <small className={`${type}-name text-warning text-uppercase`}>{element ? element.name : "empty"}</small>
                                                        </td>
                                                        <td>{element ? element.score : 0}</td>
                                                    </tr>
                                                );
                                            }
                                            else{
                                                return null;
                                            }
                                            
                                        })
                                    }
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
