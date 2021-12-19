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
			</div>
		</>
	);
};
export default React.memo(Contents);