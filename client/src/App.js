import { useContext } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Homepage, LiveStream } from './components';
import { AuthContext } from './context/AuthContext';
import { Login, Dashboard } from './dashboard_components';

function App() {

	const { currentUser } = useContext(AuthContext);

	const RequireAuth = ({ children }) => {
		return currentUser ? children : <Navigate to="/login" />;
	}

	return (
		<Router>
			<div className="App">
				<div id="content">
					<Routes>
						<Route exact path="/" element={<Homepage />} />
						<Route path="/goLive" element={<LiveStream />} />
						<Route path="/login" element={<Login />} />
						<Route path="/dashboard" element={
							<RequireAuth>
								<Dashboard />
							</RequireAuth>
						} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
