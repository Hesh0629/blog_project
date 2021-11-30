import React from 'react';
import '../style/info.scss';
import gitHubLogo from './img/GitHub-Mark-64px.png';
import acmLogo from './img/logo-crimson.svg';
import releaseLogo from './img/release-black-small.png';
import { MdOutlineAlternateEmail } from 'react-icons/md';
const Info = () => {
	return (
		<div class="info">
			<div class="name">Seonghwan Han</div>
			<div class="school">Sogang Univ.</div>
			<div class="dept">Department of Computer Science & Engineering (2019.03 ~ )</div>
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
export default Info;