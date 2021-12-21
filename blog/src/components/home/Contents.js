import React from 'react';
import Info from './Info';
import Introduce from './Introduce';
import DevStack from './DevStack';
import DogSound from './DogSound';
import '../style/contents.scss';
const Contents = () => {
	return (
		<>
			<div class="wrapper">
				<Introduce />
				<Info />
				<DevStack />
				<DogSound />
				<a href="https://www.vecteezy.com/free-vector/statistics-icon">Statistics Icon Vectors by Vecteezy</a>
			</div>
		</>
	);
};
export default React.memo(Contents);