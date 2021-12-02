import React from 'react';
import Contents from './Contents';
const Home = () => {
	return (
		<>
			<Contents class="contents" />
		</>
	);
};
export default React.memo(Home);