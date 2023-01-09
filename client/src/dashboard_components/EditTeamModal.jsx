import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../javascript/firebase';
import Alert from './Alert';

const EditTeamModal = ({ teams }) => {

	const navigate = useNavigate();

	const [teamName, setTeamName] = useState("");
	const [leader, setLeader] = useState("");
	const [coordinator, setCoordinator] = useState("");
	const [member1, setMember1] = useState("");
	const [member2, setMember2] = useState("");
	const [member3, setMember3] = useState("");

	const [score, setScore] = useState(0);
	const [rank, setRank] = useState(-1);

	const [err, setErr] = useState(false);

	const handleEditTeam = (e) => {
		e.preventDefault();

		teams.forEach((doc) => {
			console.log(doc);
		})
	}

	return (
		<div className="modal fade" id="editTeams" tabIndex="-1" aria-labelledby="editTeams" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content bg-light">
					<h5 className="modal-title display-6 topic mx-auto m-3 text-dark">EDIT TEAM</h5>

					<div className="modal-body bg-light text-dark">

						{err && <Alert message={err} />}

						<form className='justify-content-center d-flex flex-column needs-validation' noValidate>

							<div className="form-floating mb-3">
								<select className="form-select" id="selectTeam" aria-label="select-team">
									<option defaultValue>Open this select menu</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
								<label htmlFor="selectTeam">Select a Team</label>
							</div>
							
							<div className="form-floating mb-3">
								<input type="text" className={`form-control`} id="teamName" placeholder="TestName" onChange={e => setTeamName(e.target.value)} value={teamName} />
								<label htmlFor="teamName">Team Name</label>
							</div>

							<div className="form-floating mb-3">
								<input type="text" className={`form-control`} id="teamLeader" placeholder="TestName" onChange={e => setLeader(e.target.value)} value={leader} />
								<label htmlFor="teamLeader">Team Leader</label>
							</div>

							<div className="form-floating mb-3">
								<input type="text" className="form-control" id="teamCoordinator" placeholder="TestName" onChange={e => setCoordinator(e.target.value)} value={coordinator} />
								<label htmlFor="teamCoordinator">Team Coordinator</label>
							</div>

							<div className="form-floating mb-3">
								<input type="text" className="form-control" id="teamMember1" placeholder="TestName" onChange={e => setMember1(e.target.value)} value={member1} />
								<label htmlFor="teamMember1">Member 1</label>
							</div>

							<div className="form-floating mb-3">
								<input type="text" className="form-control" id="teamMember2" placeholder="TestName" onChange={e => setMember2(e.target.value)} value={member2} />
								<label htmlFor="teamMember2">Member 2</label>
							</div>

							<div className="form-floating mb-3">
								<input type="text" className="form-control" id="teamMember3" placeholder="TestName" onChange={e => setMember3(e.target.value)} value={member3} />
								<label htmlFor="teamMember3">Member 3</label>
							</div>

							<div className='row d-flex justify-content-evenly'>
								<div className="form-floating mb-3 col-md-6">
									<input type="number" min={0} className="form-control" id="score" placeholder="TestName" onChange={e => setScore(e.target.value)} value={score} />
									<label htmlFor="score">Score</label>
								</div>

								<div className="form-floating mb-3 col-md-6">
									<input type="number" min={-1} className="form-control" id="rank" placeholder="TestName" onChange={e => setRank(e.target.value)} value={rank} />
									<label htmlFor="rank">Rank</label>
								</div>
							</div>

							

							<button className="btn btn-outline-dark mx-auto px-5" type='button' onClick={handleEditTeam}>EDIT</button>

						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EditTeamModal;