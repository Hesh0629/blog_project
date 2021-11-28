import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './header/Header';
const App = () => {
	return (
		<div>
			<Header/>
			<div>
				<Route path="/" component={Home} />
			</div>
		</div>
	);
};
export default App;