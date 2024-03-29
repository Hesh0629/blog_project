import React from 'react';
import useScrollFadeIn from './useScrollFadeIn';
import '../style/models.scss';
const Models = () => {
	const effect = useScrollFadeIn('down');
	return (
		<div class="wrapper">
			<div class="models">
				<div {...effect}>
					<div class="title">
                    	여기다가 지금까지 <br/>
                    	만든 모델 올릴거임
                	</div>
					<div class="small-title">
                    	근데 아직 공부중임<br/>
                    	BentoML 언제하지
                	</div>
				</div>
			</div>
		</div>
	);
};
export default React.memo(Models);