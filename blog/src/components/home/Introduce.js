import React from 'react';
import Header from './Header';
import '../style/introduce.scss';
const Introduce = () => {
	return (
		<div class="introduce">
			<Header />
			<h1 class="big-text">배우는 사람</h1>
			<div style={{ padding: '25px 0' }}>
				아직 갈길이 먼 학생(3학기 휴학생)입니다.
				<br />
				알고리즘과 머신러닝을 공부합니다.
			</div>
			<div class="interest">
				<div style={{ margin: '0', textAlign: 'center', padding: '20px 0', fontSize: '30pt' }}>
					Interested in...
				</div>
				<ul style={{ width: 'auto', margin: '0 auto' }}>
					<li>Algorithm (especially Graph!)</li>
					<li>AI with ML</li>
					<li>Web develop</li>
				</ul>
			</div>
		</div>
	);
};
export default Introduce;