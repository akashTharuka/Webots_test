import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db, realtime_db } from '../javascript/firebase';
import { ref, onValue, orderByValue, orderByChild } from 'firebase/database';

import { images } from '../javascript/imageImports';

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

	return (
		<div className="" id={`School-leaderboard`}>
            <div className="">
                <div className="modal-content leaderboard">
                    <div className="header">
                        <h5 className="modal-title display-6 text-muted text-center my-3 p-2 me-5 me-md-0" >School Leaderboard</h5>
                        {/* <button type="button" className="btn close-btn p-3 m-1" data-bs-dismiss="modal" aria-label="Close">
                            <i className="bi bi-door-closed text-danger"></i>
                            <span className="text-warning d-none d-md-inline">EXIT</span>
                        </button> */}
                    </div>
                    <div className="modal-body leaderboard">

                        {/* first second third places in the leaderboard */}
                        <div className="row text-center text-muted justify-content-center">

                            <div className="col-10 col-sm-4 second leaderboard">
                                <div className="card my-4 mx-2 mx-md-4">
                                    <div className="card-body text-light">
                                        <img src={images.second} alt="second place" className="img-fluid" />
                                        <h5 className="team-name lead text-uppercase">{sclData[1] ? sclData[1].team : "empty"}</h5>
                                        {/* <h6 className={`team-${type} text-muted`}>{leaderboard[1] ? leaderboard[1].name : "empty"}</h6> */}
                                        <span className="team-score text-success">{sclData[1] ? sclData[1].score : 0} points</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-10 col-sm-4 first leaderboard">
                                <div className="card my-4 mx-2 mx-md-4">
                                    <div className="card-body text-light">
                                        <img src={images.first} alt="first place" className="img-fluid" />
                                        <h5 className="team-name lead text-uppercase">{sclData[0] ? sclData[0].team : "empty"}</h5>
                                        {/* <h6 className={`team-${type} text-muted`}>{leaderboard[0] ? leaderboard[0].name : "empty"}</h6> */}
                                        <span className="team-score text-warning">{sclData[0] ? sclData[0].score : 0} points</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-10 col-sm-4 third leaderboard">
                                <div className="card my-4 mx-2 mx-md-4">
                                    <div className="card-body text-light">
                                        <img src={images.third} alt="third place" className="img-fluid" />
                                        <h5 className="team-name lead text-uppercase">{sclData[2] ? sclData[2].team : "empty"}</h5>
                                        {/* <h6 className={`team-${type} text-muted`}>{leaderboard[2] ? leaderboard[2].name : "empty"}</h6> */}
                                        <span className="team-score text-primary">{sclData[2] ? sclData[2].score : 0} points</span>
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
                                        sclData.map((element, index) => {
                                            if(index > 2){
												let rank = index + 1;
                                                return(
                                                    <tr key={index}>
                                                        <td>{rank}</td>
                                                        <td>
                                                            {/* <p className="team-name text-danger">{element ? element.name : "empty"}</p> */}
                                                            <small className={`School-name text-warning text-uppercase`}>{element ? element.team : "empty"}</small>
                                                        </td>
                                                        <td>{element.score}</td>
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
}

export default LeaderboardScl;