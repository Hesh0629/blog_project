import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './header/Header';
const App = () => {
	return (
		<div class="app">
			<Header/>
			<Route path="/" component={Home} />
		</div>
	);
};
export default App;