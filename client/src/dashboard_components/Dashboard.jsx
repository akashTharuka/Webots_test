import React, { useState, useEffect } from 'react';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../javascript/firebase';
import AddTeamModal from './AddTeamModal';
import EditTeamModal from './EditTeamModal';
// import { Table } from '@mui/material';
// import Axios from 'axios';

const Dashboard = () => {

	const [uniData, setUniData] = useState([]);
	const [sclData, setSclData] = useState([]);
	const [teams, setTeams] = useState([]);

	useEffect(async () => {
		const q = query(collection(db, "uni"));
		const querySnapshot = await getDocs(q);
		let rows = [];
		let new_teams = [];
		querySnapshot.forEach((doc) => {
			new_teams.push(doc);
			rows.push(
				<tr key={doc.id}>
					<th scope='row'>{doc.data().rank}</th>
					<td className='accordion accordion-flush' id={doc.id}>
						<div className="accordion-item rounded-3">
							<h2 className="accordion-header" id={`heading-${doc.id}`}>
								<button className="accordion-button bg-secondary text-white rounded-3" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${doc.id}`} aria-expanded="false" aria-controls={`collapse-${doc.id}`}>
									{doc.data().name}
								</button>
							</h2>
							<div id={`collapse-${doc.id}`} className="accordion-collapse collapse bg-secondary" aria-labelledby={`heading-${doc.id}`} data-bs-parent={`#${doc.id}`}>
								<div className="accordion-body text-start">
									<ul>
										<li><strong>Team Leader: </strong>{doc.data().leader}</li>
										<li><strong>Team Coordinator: </strong>{doc.data().coordinator}</li>
										<li><strong>Member 1: </strong>{doc.data().member1}</li>
										<li><strong>Member 2: </strong>{doc.data().member2}</li>
										<li><strong>Member 3: </strong>{doc.data().member3}</li>
									</ul>
								</div>
							</div>
						</div>
					</td>
					<td>{doc.data().score}</td>
				</tr>
			);
		});

		setUniData(rows);
		setTeams([...teams, ...new_teams]);
	}, []);

	useEffect(async () => {
		const q = query(collection(db, "scl"));
		const querySnapshot = await getDocs(q);
		let rows = [];
		let new_teams = [];
		querySnapshot.forEach((doc) => {
			new_teams.push(doc);
			rows.push(
				<tr key={doc.id}>
					<th scope='row'>{doc.data().rank}</th>
					<td className='accordion accordion-flush' id={doc.id}>
						<div className="accordion-item rounded-3">
							<h2 className="accordion-header" id={`heading-${doc.id}`}>
								<button className="accordion-button bg-secondary text-white rounded-3" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${doc.id}`} aria-expanded="false" aria-controls={`collapse-${doc.id}`}>
									{doc.data().name}
								</button>
							</h2>
							<div id={`collapse-${doc.id}`} className="accordion-collapse collapse bg-secondary" aria-labelledby={`heading-${doc.id}`} data-bs-parent={`#${doc.id}`}>
								<div className="accordion-body text-start">
									<ul>
										<li><strong>Team Leader: </strong>{doc.data().leader}</li>
										<li><strong>Team Coordinator: </strong>{doc.data().coordinator}</li>
										<li><strong>Member 1: </strong>{doc.data().member1}</li>
										<li><strong>Member 2: </strong>{doc.data().member2}</li>
										<li><strong>Member 3: </strong>{doc.data().member3}</li>
									</ul>
								</div>
							</div>
						</div>
					</td>
					<td>{doc.data().score}</td>
				</tr>
			);
		});
		setSclData(rows);
		setTeams([...teams, ...new_teams]);
	}, []);


    return (
        <div className="container-fluid text-white">
            <div className="row add-teams p-4 mx-auto my-3 d-flex">
                <button className='btn btn-outline-warning mx-2 p-3' data-bs-target="#addTeams" data-bs-toggle="modal" data-bs-dismiss="modal">
                    Add Team
                </button>

				<button className='btn btn-outline-warning mx-2 p-3' data-bs-target="#editTeams" data-bs-toggle="modal" data-bs-dismiss="modal">
                    Edit Team
                </button>
            </div>
			<AddTeamModal />
			<EditTeamModal teams={teams} />

            <div className="row update-scores">
                <div className="row uni">
                    <div className="col-10 mx-auto my-4">
                        <h2 className="lead text-center">University Teams</h2>
                    </div>
                    <div className="row my-4 mx-auto text-muted justify-content-center">
                        <table className="table align-middle table-dark table-hover table-borderless col-8 mx-5 text-center">
                            <thead className="lead text-muted">
                                <tr>
                                    <th scope="col">Rank</th>
                                    <th scope="col">Teams</th>
                                    <th scope="col">Score</th>
                                </tr>
                            </thead>
                            <tbody>
								{uniData}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row school">
                    <div className="col-10 mx-auto my-4">
                        <h2 className="lead text-center">School Teams</h2>
                    </div>
					<div className="row my-4 mx-auto text-muted justify-content-center">
						<table className="table align-middle table-dark table-hover table-borderless col-8 mx-5 text-center">
							<thead className="lead text-muted">
								<tr>
									<th scope="col">Rank</th>
									<th scope="col">Teams</th>
									<th scope="col">Score</th>
								</tr>
							</thead>
							<tbody>
								{sclData}
							</tbody>
						</table>
					</div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;