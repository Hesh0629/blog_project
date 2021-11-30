import React from 'react';
import '../style/contents.scss';
import gitHubLogo from './GitHub-Mark-64px.png';
import acmLogo from './logo-crimson.svg';
import releaseLogo from './release-black-small.png';
import { MdOutlineAlternateEmail } from 'react-icons/md';
const Contents = () => {
	return (
		<>
			<div class="wrapper">
				<div class="introduce">
					<div class="header">
						<div class="header-wrapper">
							<div class="title">
								<div class="titleBox">
									<a
										class="titleLink"
										href="http://hesh0629.github.io"
										style={{ cursor: 'pointer' }}
									>
										슈뢰딩거의 진돗개
									</a>
								</div>
							</div>

							<div class="link">
								<ul class="linkBox">
									<li class="list">
										<a class="box" href="http://www.hesh-lumineux.dev">
											Blog
										</a>
									</li>
									<li class="list">
										<a class="box" href="https://github.com/Hesh0629">
											GitHub
										</a>
									</li>
									<li class="list">
										<a class="box" href="https://solved.ac/profile/neogate">
											Solved.ac
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<h1 class="big-text">배우는 사람</h1>
					<div style={{ padding: '25px 0' }}>
						아직 갈길이 먼 학생(3학기생)입니다.
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
				<div class="info">
					<div class="name">Seonghwan Han</div>
					<div class="school">Sogang Univ.</div>
					<div class="dept">Department of Computer Science & Engineering (2019.03 ~ )</div>
					<div>
						<MdOutlineAlternateEmail
							style={{ paddingRight: '10px', width: '24px', height: '24px' }}
						/>
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
						<img
							src={acmLogo}
							alt="acm"
							width="24px"
							height="24px"
							style={{ paddingRight: '10px' }}
						/>
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
				<div class="DevStack">
					<h1>
						<small>
							<del>(빈약하지만)</del>
						</small>{' '}
						Develop Stack
					</h1>
					<div class="language"></div>
					<div class="web"></div>
					<div class="ML"></div>
				</div>
			</div>
		</>
	);
};
export default Contents;