import React from 'react';
// import { useState, useEffect } from 'react';
// import Axios from 'axios';
import TeamSelector from '../components/TeamSelector';

const Dashboard = () => {

    // const [data, setData] = useState();

    // const getData = async () => {
    //     const result = await Axios.get('http://localhost:5000/dashboard');
    //     setData(result.data);
    // }

    // useEffect(() => {
    //     getData();
    // }, []);

    // console.log(data);

    return (
        <div className="container-fluid text-white">
            <div className="row add-teams p-4 mx-auto my-3 d-flex">
                <button className='btn btn-outline-warning mx-2 p-3' data-bs-target="#addTeamTabs" data-bs-toggle="modal" data-bs-dismiss="modal">
                    Add Team
                </button>
            </div>
			<TeamSelector />
            <div className="row update-scores">
                <div className="row uni">
                    <div className="col-10 mx-auto my-4">
                        <h2 className="lead text-center">University Teams</h2>
                    </div>
                    <div className="row my-4 mx-auto text-muted justify-content-center">
                        <table className="table align-middle table-dark table-striped table-hover table-borderless col-8 mx-5 text-center">
                            <thead className="lead text-muted">
                                <tr>
                                    <th scope="col">Rank</th>
                                    <th scope="col">Teams</th>
                                    <th scope="col">Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
                                    data.universities.map((element, index) => {
                                        return(
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <p className="team-name text-danger">{element ? element.teamName : "empty"}</p>
                                                    <small className="uni-name text-warning text-uppercase">{element ? element.name : "empty"}</small>
                                                </td>
                                                <td>{element ? element.score : 0}</td>
                                            </tr>
                                        );
                                    })
                                } */}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row school">
                    <div className="col-10 mx-auto my-4">
                        <h2 className="lead text-center">School Teams</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;