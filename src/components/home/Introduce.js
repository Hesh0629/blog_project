import React from 'react';
import useScrollFadeIn from './useScrollFadeIn';
import '../style/introduce.scss';
const Introduce = () => {
	const effect = useScrollFadeIn('down');
	return (
		<div class="introduce">
			
			<div {...effect}>
				<div class="big-text">배우는 사람</div>
				<div class="small-text">아직 공부할 게 많은 학부생입니다.</div>
				<div class="interest">
					<div style={{ margin: '0', textAlign: 'center', padding: '20px 0', fontSize: '30pt' }}>
						Interested in...
					</div>
					<ul style={{ width: 'auto', margin: '0 auto' }}>
						<li>
							AI with ML <small>(Computer Vision을 관심있게 공부중입니다)</small>
						</li>
						<li>
							Algorithm <small>(그 중에서도 그래프를 좋아합니다.)</small>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Introduce;