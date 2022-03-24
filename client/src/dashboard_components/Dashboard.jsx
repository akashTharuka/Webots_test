import React from 'react';

const Dashboard = () => {
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