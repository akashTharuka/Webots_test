import React from 'react';

const Toast = () => {
	return (
		<div className="toast align-items-center text-white bg-success border-0 show position-absolute" role="alert" aria-live="assertive" aria-atomic="true">
			<div className="d-flex">
				<div className="toast-body text-light">
					Refresh the page to update the scoreboard
				</div>
				<button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
			</div>
		</div>
	);
}

export default Toast; 