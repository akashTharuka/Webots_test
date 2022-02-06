import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Homepage, LiveStream, Contact } from './components';

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
					</Switch>
				</div>
			</div>
			<div className="footer">
				<Contact />
			</div>
		</Router>
		
	);
}

export default App;
