import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Homepage } from './components';

function App() {
	return (
		<Router>
			<div className="App">
				<div id="content">
					<Switch>
						<Router exact path="/">
							<Navbar />
							<Homepage />
						</Router>
					</Switch>
				</div>
			</div>
		</Router>
		
	);
}

export default App;
