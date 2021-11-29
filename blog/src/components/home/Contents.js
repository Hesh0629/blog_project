import React from 'react';
import '../style/contents.scss';
const Contents = () => {
	return (
		<>
			<div class="wrapper">
				<div class="introduce">
					<div class="header">
						<div class="header-wrapper">
							<div class="title">
								<div class="titleBox">
									<div
										class="titleLink"
										OnClick="location.href ='http://hesh0629.github.io'"
										style={{ cursor: 'pointer' }}
									>
										슈뢰딩거의 진돗개
									</div>
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
					<div>Sogang Univ. / 2019.03 ~ (군 휴학중)</div>
					<div>neogate@sogang.ac.kr</div>
					<div>https://github.com/hesh0629</div>
					<div>Sogang ICPC Team (2019.09 ~ )</div>
					<div>Release (2019.09 ~ )</div>
				</div>
				<div class="contents">
					<h1>집짓기 4일차</h1>
					<p>
						on task
						<br />
						미디어 쿼리 적용 X
					</p>
				</div>
			</div>
		</>
	);
};
export default Contents;