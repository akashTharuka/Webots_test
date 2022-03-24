import React from 'react';

import { images } from '../javascript/imageImports';

const Login = () => {
    return (
        <div className="login container-fluid" style={{backgroundImage: `url(${images.dashboard_bg})`}}>
            <div className='login card bg-light mx-auto px-md-5 px-1 py-5'>
                <div className="card-title display-6 text-uppercase text-center">
                    Login
                </div>
                <div className="card-body">
                    <form className="form text-center" autoComplete="false">
                        <div className="mb-3 input-group">
                            <span class="input-group-text">
                                <i class="bi bi-person-fill text-secondary"></i>
                            </span>
                            <input type="text" className="form-control" placeholder='username' />
                        </div>
                        <div className="mb-3 input-group">
                            <span class="input-group-text">
                                <i class="bi bi-lock-fill text-secondary"></i>
                            </span>
                            <input type="password" className="form-control" placeholder='password' /> 
                        </div>
                        <span className='text-danger error-msg d-none'>Authentication Error!!!</span>
                        <button type="button" class="btn btn-outline-dark mt-3 mx-auto px-5">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;