import React, { useState, useEffect } from 'react';
import '../style/info.scss';
import gitHubLogo from './img/GitHub-Mark-64px.png';
import acmLogo from './img/logo-crimson.svg';
import releaseLogo from './img/release-black-small.png';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import useScrollFadeIn from './useScrollFadeIn';
const Info = () => {
	const [miliday, setMili] = useState('');
	const [leftDay, setLeft] = useState('');
	const [doneDay, setDone] = useState('');
	//useEffect로 렌더링될 때 한번, 그리고 특정 값이 바뀔때
	useEffect(() => {
		const interval = setInterval(function () {
			var now = new Date();
			//*주의* 월 인덱스가 0부터 시작
			var stDate = new Date(2020, 8, 7);
			var edDate = new Date(2022, 0, 13);
			var gapDay = (edDate.getTime()-now.getTime())/1000/60/60/24;
			var overDay = (now.getTime()-stDate.getTime())/1000/60/60/24;
			var stDateTime = stDate.getTime() / (1000 * 60 * 60 * 24);
			var edDateTime = edDate.getTime() / (1000 * 60 * 60 * 24);
			var nowTime = now.getTime() / (1000 * 60 * 60 * 24);
			var percent = ((nowTime - stDateTime) / (edDateTime - stDateTime)) * 100;
			percent = percent.toFixed(8);
			gapDay=gapDay.toFixed(0);
			overDay=overDay.toFixed(0);
			setMili(`${percent}%`);
			setDone(`D+${overDay}`);
			setLeft(`D-${gapDay}`);
		}, 50);
		// cleanUp 함수
		return () => {
			clearInterval(interval);
		};
	}, [miliday]);
	const effect = useScrollFadeIn('right');
	return (
		<div class="info" {...effect}>
			<div class="name">Seonghwan Han</div>
			<div class="school">Sogang Univ.</div>
			<div class="dept">Department of Computer Science & Engineering (2019.03 ~ )</div>
			<div class="miliday">
				Sergeant. ROKA (2020.09 ~ ) {doneDay}
				<div class="percent">{miliday}</div>
				<div class="percent">{leftDay}</div>
			</div>
			<div>
				<MdOutlineAlternateEmail style={{ paddingRight: '10px', width: '24px', height: '24px' }} />
				neogate@sogang.ac.kr
			</div>
			<div>
				<img
					src={gitHubLogo}
					alt="gitHub"
					width="24px"
					height="24px"
					style={{ paddingRight: '10px' }}
				/>
				https://github.com/hesh0629
			</div>
			<div>
				<img src={acmLogo} alt="acm" width="24px" height="24px" style={{ paddingRight: '10px' }} />
				Sogang ICPC Team (2019.09 ~ )
			</div>
			<div>
				<img
					src={releaseLogo}
					alt="release"
					width="24px"
					height="24px"
					style={{ paddingRight: '10px' }}
				/>
				Release (2019.09 ~ )
			</div>
		</div>
	);
};
export default React.memo(Info);