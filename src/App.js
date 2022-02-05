import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Homepage } from './components';

function App() {
	return (
		<Router>
			<div className="App">
				<div id="content">
					<Switch>
						<Route exact path="/">
							<Navbar />
							<Homepage />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
		
	);
}

export default App;
