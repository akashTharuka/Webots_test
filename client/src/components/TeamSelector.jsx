import React from 'react';
import { images } from '../javascript/imageImports';
import AddTeam from './AddTeam';

const TeamSelector = () => {
	return (
		<div className="modal fade" id="addTeamTabs" aria-hidden="true" aria-labelledby="addTeamTabs" tabIndex="-1">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-body">
						<div className="row justify-content-center">
							<div className="col-sm-10 my-2">
								<div className="card d-flex leaderboard">

									<div className="row justify-content-center" data-bs-target="#uniTeam" data-bs-toggle="modal" data-bs-dismiss="modal">
										<div className="card-body text-center col-md-7">
											<h5 className="card-title display-6 text-warning">University Team</h5>
										</div>
									</div>
									<AddTeam 
										id="uniTeam"
										title="Add University Team" 
									/>
								</div>
								
							</div>
							<div className="col-sm-10 my-2">
								<div className="card d-flex leaderboard">

									<div className="row justify-content-center" data-bs-target="#sclTeam" data-bs-toggle="modal" data-bs-dismiss="modal">
										<div className="card-body text-center col-md-7">
											<h5 className="card-title display-6 text-warning">School Team</h5>
										</div>
									</div>
									<AddTeam 
										id="sclTeam"
										title="Add School Team" 
									/>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TeamSelector;