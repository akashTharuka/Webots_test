import React from 'react';

const AddTeam = ({ id, title }) => {
	return (
		<div className="modal fade" id={id} aria-hidden="true" aria-labelledby="leaderboardTabs" tabIndex="-1">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content leaderboard">
                    <div className="header">
                        <h5 className="modal-title display-6 text-muted text-center my-3 p-2 me-5 me-md-0" >{title}</h5>
                        <button type="button" className="btn close-btn p-3 m-1" data-bs-dismiss="modal" aria-label="Close">
                            <i className="bi bi-door-closed text-danger"></i>
                            <span className="text-warning d-none d-md-inline">EXIT</span>
                        </button>
                    </div>
                    <div className="modal-body">
						Modal Body
                    </div>
                </div>
            </div>
        </div>
	);
}

export default AddTeam;