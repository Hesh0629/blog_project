import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import TitleBox from './titleBox/TitleBox';
const App = () => {
	return (
		<div>
			<TitleBox class="titleBox"/>
			<div>
				<Route path="/" component={Home} />
			</div>
		</div>
	);
};
export default App;	