import React, { useState } from 'react';
import Axios from 'axios';

import { images } from '../javascript/imageImports';
import Leaderboard from './Leaderboard';
import Contact from './Contact';

const LiveStream = () => {

	const [uniLeaderboard, setUniLeaderboard] = useState([]);
	const [schoolLeaderboard, setSchoolLeaderboard] = useState([]);

	const getUniLeaderboard = async () => {

		const result = await Axios.get('https://robogames-heroku-22.herokuapp.com/leaderboards/uni')
		setUniLeaderboard(result.data);
	}

	const getSchoolLeaderboard = async () => {

		const result = await Axios.get('https://robogames-heroku-22.herokuapp.com/leaderboards/school');
		setSchoolLeaderboard(result.data);
	}

	return(
		<div>
			{/* live streaming div */}
			<div className="my-5 mx-auto justify-content-center d-flex livestream" id="live-stream-div">
				<img className="livestream-img img-fluid " src={images.Thumbnail2} alt="" />
				{/* <div className="stop-div play-pause">
					<div className="z-control pause" id="DisconnectButton"></div>
		
				</div>
				<div className="play-div play-pause">
					<div className="z-control play" id="ConnectButton"></div>
		
				</div> */}
				<div id="playerDiv">
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

										<div className="row justify-content-center" data-bs-target="#University-leaderboard" data-bs-toggle="modal" data-bs-dismiss="modal" onClick={getUniLeaderboard}>
											<img src={images.cup} alt="" className="img-fluid leaderboard-cup mx-3 p-2 col-md-5" />
											<div className="card-body text-center col-md-7">
												<h5 className="card-title display-6 text-warning">University</h5>
												<span className="lead text-warning">Leaderboard</span>
											</div>
										</div>

									</div>
								</div>
								<div className="col-sm-10 my-2">
									<div className="card d-flex leaderboard" style={{background: `url(${images.background})`}}>

										<div className="row justify-content-center" data-bs-target="#School-leaderboard" data-bs-toggle="modal" data-bs-dismiss="modal" onClick={getSchoolLeaderboard}>
											<img src={images.cup} alt="" className="img-fluid leaderboard-cup mx-3 p-2 col-md-5" />
											<div className="card-body text-center col-md-7">
												<h5 className="card-title display-6 text-warning">School</h5>
												<span className="lead text-warning">Leaderboard</span>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Leaderboard type="University" leaderboard={uniLeaderboard} />
			<Leaderboard type="School" leaderboard={schoolLeaderboard} />

			<Contact />
		</div>
	);
};

export default LiveStream;
