import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
const Header = () => {
	return (
		<div class="header">
			<div class="header-wrapper">
				<div class="title">
					<div class="titleBox">
					<Link to="/" style={{ textDecoration: 'none' }}>
						<a class="titleLink" href="http://hesh0629.github.io" style={{ cursor: 'pointer' }}>
							Seonghwan Han
						</a>
					</Link>
					</div>
				</div>
				<div class="link">
					<ul class="linkBox">
						<li class="list">
							<a class="box" href="https://hesh-lumineux.tistory.com">
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
						<Link to="/models">
							<li class="list">
								<a class="box" href="https://solved.ac/profile/neogate">
									Projects
								</a>
							</li>
						</Link>		
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Header;