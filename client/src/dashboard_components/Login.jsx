import React, { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../javascript/firebase';
import { useNavigate } from 'react-router-dom';

import { images } from '../javascript/imageImports';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

	const [err, setErr] = useState(false);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const navigate = useNavigate();

	const { dispatch } = useContext(AuthContext);

	const handleLogin = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				dispatch({ type: "LOGIN", payload: user });
				navigate('/dashboard');
				
			})
			.catch((error) => {
				// const errorCode = error.code;
				// const errorMessage = error.message;
				setErr(true);
			});
	}

    return (
        <div className="login container-fluid" style={{backgroundImage: `url(${images.dashboard_bg})`}}>
            <div className='login card bg-light mx-auto px-md-5 px-1 py-5'>
                <div className="card-title display-6 text-uppercase text-center">
                    Login
                </div>
                <div className="card-body">
                    <form className="form text-center needs-validation" autoComplete="false" noValidate>
                        <div className={`mb-3 form-floating ${err ? "is-invalid" : ""}`}>
                            <input type="email" className="form-control" id='floatingEmailInput' placeholder='email@example.com' onChange={e => setEmail(e.target.value)} />
							<label htmlFor="floatingEmailInput">Email Address</label>
                        </div>
                        <div className={`mb-3 form-floating ${err ? "is-invalid" : ""}`}>
							<input type="password" className="form-control" id='floatingPasswordInput' placeholder='password' onChange={e => setPassword(e.target.value)} />
							<label htmlFor="floatingPasswordInput">Password</label>
                        </div>
                        <div className="invalid-feedback">Authentication Error</div>
                        <button type="submit" className="btn btn-outline-dark mt-3 mx-auto px-5" onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;