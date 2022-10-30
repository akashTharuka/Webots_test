import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Homepage, LiveStream } from './components';
import { Login, Dashboard } from './dashboard_components';

function App() {
	return (
		<Router>
			<div className="App">
				<div id="content">
					<Switch>
						<Route exact path="/">
							<Navbar gameday={0} />
							<Homepage />
						</Route>
						<Route path="/goLive">
							<Navbar gameday={1} />
							<LiveStream />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/dashboard">
							<Dashboard />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
