import React from 'react';
import useScrollFadeIn from './useScrollFadeIn';
import './notfound.scss';
const NotFound = () => {
	const effect = useScrollFadeIn('down');
	return (
		<div class="models">
			<div {...effect}>
				<div class="title">
                    Wrong Page
                </div>
			</div>
		</div>
	);
};
export default React.memo(NotFound);