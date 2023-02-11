import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Axios from 'axios';
import { collection, query, getDocs } from "firebase/firestore";
import { db, realtime_db } from '../javascript/firebase';
// import { ref, onValue, orderByValue, orderByChild } from 'firebase/database';

import { images } from '../javascript/imageImports';
// import Leaderboard from './Leaderboard';
import Contact from './Contact';
import Navbar from './Navbar';
import Countdown from './Countdown';

const LiveStream = () => {

	const [finished, setFinished] = useState(false);
	const [time, setTime] = useState();
	const [start, setStart] = useState(false);
	const [team, setTeam] = useState();
	const [videoUrl, setVideoUrl] = useState();


	useEffect(async () => {
		const q = query(collection(db, "videos"));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			setStart(doc.data().timerStart);
			setTeam(doc.data().team);
			setVideoUrl(doc.data().url);
			setTime(`Feb 11, 2023 ${new Date(new Date().getTime() + (doc.data().minutes*60*1000)).toLocaleTimeString()}`);
		});
		
	}, []);

	// useEffect(() => {
	// 	const uni_ref = ref(realtime_db, 'uni');
	// 	const uni_query = query(uni_ref, orderByValue('uni/score'));

	// 	let rows = [];
	// 	let new_teams = [];
	// 	onValue(uni_query, (snapshot) => {
			
	// 		snapshot.forEach((doc) => {
	// 			new_teams.push(doc);
	// 			rows.push(doc.val());
	// 			setUniData(rows);
	// 		});
	// 		console.log(rows);
			
	// 	}, {
	// 		onlyOnce: true
	// 	});

	// }, []);

	// const getUniData = async () => {
	// 	const q = query(collection(db, "uni"), orderBy("score", "desc"));
	// 	const querySnapshot = await getDocs(q);
	// 	let rows = [];
	// 	let new_teams = [];
	// 	querySnapshot.forEach((doc) => {
	// 		new_teams.push(doc);
	// 		rows.push(doc.data());
	// 	});
	// 	setUniData(rows);
	// }

	// const getSclData = async () => {
	// 	const q = query(collection(db, "scl"), orderBy("score", "desc"));
	// 	const querySnapshot = await getDocs(q);
	// 	let rows = [];
	// 	let new_teams = [];
	// 	querySnapshot.forEach((doc) => {
	// 		new_teams.push(doc);
	// 		rows.push(doc.data());
	// 	});
	// 	setSclData(rows);
	// }

	return(
		<div>
			<Navbar gameday={1} />
			{/* live streaming div */}
			<div className="my-5 mx-auto justify-content-center d-flex livestream" id="live-stream-div">
				{! start ? <img className="livestream-img img-fluid" src={images.challenge_bg} alt="" /> : 
					<div className="container" style={{maxHeight: "80vh", maxWidth: "80vw"}}>
						{finished ? <div id="playerDiv" className='ratio ratio-16x9'>
							<iframe width="560" height="315" src={`${videoUrl}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
						</div> : <div>
							<Countdown time={time} setFinished={setFinished}/>
							<p className="display-6 text-center my-4 text-muted">{team}</p>
						</div>}
					</div>
				}
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

			{/* <Leaderboard type="University" leaderboard={uniData} /> */}
			{/* <Leaderboard type="School" leaderboard={sclData} /> */}

			<Contact />
		</div>
	);
};

export default LiveStream;
