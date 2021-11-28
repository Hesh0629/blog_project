import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
const TitleBox = () => {
	return (
		<div class="header">
			<div class="wrapper">
				
				<div class="title">
					<div class="titleBox">
						<Link class="titleLink" to="/">
							슈뢰딩거의 진돗개
						</Link>
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
	);
};
export default TitleBox;