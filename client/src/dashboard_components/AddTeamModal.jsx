import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../javascript/firebase';
import Alert from './Alert';

const AddTeamModal = () => {

	const navigate = useNavigate();

	const [teamName, setTeamName] = useState("");
	const [leader, setLeader] = useState("");
	const [coordinator, setCoordinator] = useState("");
	const [member1, setMember1] = useState("");
	const [member2, setMember2] = useState("");
	const [member3, setMember3] = useState("");
	const [category, setCategory] = useState("uni");

	const [teamNameErr, setTeamNameErr] = useState(null);
	const [leaderErr, setLeaderErr] = useState(null);
	const [err, setErr] = useState(null);

	const handleAddTeam = async (e) => {
		e.preventDefault();

		let err = false;

		if (teamName === ""){
			setTeamNameErr("Team name cannot be empty");
			err = true;
		}
		else{
			setTeamNameErr(null);
		}
		if (leader === ""){
			setLeaderErr("Team must have a leader");
			err = true;
		}
		else{
			setLeaderErr(null);
		}

		if (! err){
			const docRef = await addDoc(collection(db, category), {
				name: teamName,
				leader: leader,
				coordinator: coordinator,
				member1: member1,
				member2: member2,
				member3: member3,
				rank: -1,
				score: 0,
			});
			console.log("Document written with ID: ", docRef.id);
			if (docRef.id){
				navigate(0);
			}
			else{
				setErr("Network Error: Try again");
			}
		}

	}

	return (
		<div className="modal fade" id="addTeams" tabIndex="-1" aria-labelledby="addUniTeams" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content bg-light">
					<h5 className="modal-title display-6 topic mx-auto m-3 text-dark">ADD TEAM</h5>

					<div className="modal-body bg-light text-dark">

						{err && <Alert message={err} />}

						<form className='justify-content-center d-flex flex-column needs-validation' noValidate>
							<div className='mb-3'>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="teamType" id="university" defaultChecked  onClick={e => setCategory("uni")} />
									<label className="form-check-label" htmlFor="university">
										University
									</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="teamType" id="school" onClick={e => setCategory("scl")} />
									<label className="form-check-label" htmlFor="school">
										school
									</label>
								</div>
							</div>
							
							<div className="form-floating mb-3">
								<input type="text" className={`form-control ${(teamNameErr === null ? "" : "is-invalid")}`} id="teamName" placeholder="TestName" onChange={e => setTeamName(e.target.value)} value={teamName} />
								<label htmlFor="teamName">Team Name</label>
								<div className="invalid-feedback">{teamNameErr}</div>
							</div>

							<div className="form-floating mb-3">
								<input type="text" className={`form-control ${(leaderErr === null ? "" : "is-invalid")}`} id="teamLeader" placeholder="TestName" onChange={e => setLeader(e.target.value)} value={leader} />
								<label htmlFor="teamLeader">Team Leader</label>
								<div className="invalid-feedback">{leaderErr}</div>
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

							<button className="btn btn-outline-dark mx-auto px-5" type='button' onClick={handleAddTeam}>ADD</button>

						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddTeamModal;