import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

const Dashboard = () => {

    const [uniLeaderboard, setUniLeaderboard] = useState([]);
	const [schoolLeaderboard, setSchoolLeaderboard] = useState([]);

	const getUniLeaderboard = async () => {
		const result = await Axios.get('http://localhost:5000/dashboard/uni')
		setUniLeaderboard(result.data);
	}

	const getSchoolLeaderboard = async () => {
		const result = await Axios.get('http://localhost:5000/dashboard/school');
		setSchoolLeaderboard(result.data);
	}

    getUniLeaderboard();
    console.log(uniLeaderboard);

    return (
        <div className="container-fluid text-white">
            <div className="row add-teams p-4 mx-auto my-3 d-flex">
                <button className='btn btn-outline-warning mx-2 p-3'>
                    Add Team
                </button>
            </div>
            <div className="row update-scores">
                Scores
            </div>
        </div>
    );
}

export default Dashboard;