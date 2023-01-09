import React from 'react';
import { images } from '../javascript/imageImports.js';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const Alert = ({ message }) => {

	const navigate = useNavigate();

	const handleRefresh = () => {
		navigate('/dashboard');
	}

	return (
		<div className="alert alert-danger d-flex align-items-center alert-dismissible fade show" role="alert">
			<img className='me-2' src={images.warning} alt="exclamation triangle" style={{height: "25px", width: "25px"}} />
			<div>
				{message}
			</div>
			<div className="refresh-btn">
				<button className="btn btn-outline-danger mx-3" onClick={handleRefresh}>Refresh</button>
			</div>
			<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
		</div>
	);
}

export default Alert;