import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db, realtime_db } from '../javascript/firebase';
import { ref, onValue, orderByValue, orderByChild } from 'firebase/database';

import { images } from '../javascript/imageImports';

import Navbar from './Navbar';
import Toast from './Toast';

const LeaderboardScl = () => {

	const [sclData, setSclData] = useState([]);

	const getSclData = async () => {
		const q = query(collection(db, "scl"), orderBy("score", "desc"));
		const querySnapshot = await getDocs(q);
		let rows = [];
		let new_teams = [];
		querySnapshot.forEach((doc) => {
			new_teams.push(doc);
			rows.push(doc.data());
		});
		setSclData(rows);
	}

	useEffect(async () => {
		getSclData();
	}, []);

	const getRows = () => {
		let rows = [];
		let prev_score = 0;
		let count = 0;
		let rank = 0;
		for (let i = 0; i < sclData.length; i++) {
			count += 1;
			if (sclData[i].score != prev_score){
				rank = count;
			}
			prev_score = sclData[i].score;
			rows.push(
				<tr key={i}>
					<td>{rank}</td>
					<td>
						{/* <p className="team-name text-danger">{element ? element.name : "empty"}</p> */}
						<small className={`University-name text-warning text-uppercase`}>{sclData[i] ? sclData[i].team : "empty"}</small>
					</td>
					<td>{sclData[i].score}</td>
				</tr>
			);
		}
		return rows;
	}

	return (
		<div className="" id={`School-leaderboard`}>
			<Navbar gameday={1} />
			{/* <Toast /> */}
            <div className="">
                <div className="modal-content leaderboard">
                    <div className="header">
                        <h5 className="modal-title display-6 text-muted text-center my-3 p-2 me-5 me-md-0" >School Simulation Leaderboard</h5>
						<h3 className="lead slt-green m-3">Refresh the page to update the scoreboard</h3>
                        {/* <button type="button" className="btn close-btn p-3 m-1" data-bs-dismiss="modal" aria-label="Close">
                            <i className="bi bi-door-closed text-danger"></i>
                            <span className="text-warning d-none d-md-inline">EXIT</span>
                        </button> */}
                    </div>
                    <div className="modal-body leaderboard">

                        {/* first second third places in the leaderboard */}
                        {/* <div className="row text-center text-muted justify-content-center">

                            <div className="col-10 col-sm-4 second leaderboard">
                                <div className="card my-4 mx-2 mx-md-4">
                                    <div className="card-body text-light">
                                        <img src={images.second} alt="second place" className="img-fluid" />
                                        <h5 className="team-name lead text-uppercase">{sclData[1] ? sclData[1].team : "empty"}</h5>
                                        <span className="team-score text-success">{sclData[1] ? sclData[1].score : 0} points</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-10 col-sm-4 first leaderboard">
                                <div className="card my-4 mx-2 mx-md-4">
                                    <div className="card-body text-light">
                                        <img src={images.first} alt="first place" className="img-fluid" />
                                        <h5 className="team-name lead text-uppercase">{sclData[0] ? sclData[0].team : "empty"}</h5>
                                        <span className="team-score text-warning">{sclData[0] ? sclData[0].score : 0} points</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-10 col-sm-4 third leaderboard">
                                <div className="card my-4 mx-2 mx-md-4">
                                    <div className="card-body text-light">
                                        <img src={images.third} alt="third place" className="img-fluid" />
                                        <h5 className="team-name lead text-uppercase">{sclData[2] ? sclData[2].team : "empty"}</h5>
                                        <span className="team-score text-primary">{sclData[2] ? sclData[2].score : 0} points</span>
                                    </div>
                                </div>
                            </div>

                        </div> */}

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
									{sclData.length ? getRows() : null}
                                </tbody>
                            </table>
                        </div>
                    </div>

					{/* leaderboard selector popup */}
					<div className="modal fade" id="leaderboardTabs" aria-hidden="true" aria-labelledby="leaderboardTabs" tabIndex="-1">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-body">
									<div className="row justify-content-center">
										<div className="col-sm-10 my-2">
											<div className="card d-flex leaderboard" style={{background: `url(${images.background})`}}>

												<Link to="/leaderboard-uni" className='text-decoration-none'>
													<div className="row justify-content-center">
													{/* data-bs-target="#University-leaderboard" data-bs-toggle="modal" data-bs-dismiss="modal" onClick={getUniData} */}
														<img src={images.cup} alt="" className="img-fluid leaderboard-cup mx-3 p-2 col-md-5" />
														<div className="card-body text-center col-md-7">
															<h5 className="card-title display-6 text-warning">University</h5>
															<span className="lead text-warning">Leaderboard</span>
														</div>
													</div>
												</Link>
											</div>
										</div>
										<div className="col-sm-10 my-2">
											<div className="card d-flex leaderboard" style={{background: `url(${images.background})`}}>

												<Link to="/leaderboard-scl" className='text-decoration-none'>
													<div className="row justify-content-center">
														{/*  data-bs-target="#School-leaderboard" data-bs-toggle="modal" data-bs-dismiss="modal" onClick={getSclData} */}
														<img src={images.cup} alt="" className="img-fluid leaderboard-cup mx-3 p-2 col-md-5" />
														<div className="card-body text-center col-md-7">
															<h5 className="card-title display-6 text-warning">School</h5>
															<span className="lead text-warning">Leaderboard</span>
														</div>
													</div>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
                </div>
            </div>
        </div>
	);
}

export default LeaderboardScl;