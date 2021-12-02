import React from 'react';
import Info from './Info';
import Introduce from './Introduce';
import DevStack from './DevStack';
import '../style/contents.scss';
const Contents = () => {
	return (
		<>
			<div class="wrapper">
				<Introduce />
				<Info/>
				<DevStack />
			</div>
		</>
	);
};
export default React.memo(Contents);