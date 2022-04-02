import React from 'react';
import useScrollFadeIn from './useScrollFadeIn';
import dataVector from './img/data_vector.png';
import {
	SiCplusplus,
	SiPython,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiScikitlearn,
	SiPandas,
	SiTensorflow
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import '../style/devStack.scss';
const DevStack = () => {
	const effect = useScrollFadeIn('right');
	const effect2 = useScrollFadeIn('left',0.3);
	return (
		<div class="DevStack">
			<img class="img" src={dataVector} alt="dataVector" {...effect2} />
			<div {...effect}>
				<h1 style={{ margin: '0', padding: '30px 0' }}>
					사용중인 언어, 스택
				</h1>
				<div class="language">
					<div class="title">language</div>
					<div class="contents">
						<div class="cmp">
							<SiCplusplus class="icon" />
							C++
							<br />
							(main)
						</div>
						<div class="cmp">
							<SiPython class="icon" />
							Python
							<br />
							(sub)
						</div>
					</div>
				</div>
				<div class="web">
					<div class="title">Web</div>
					<div class="contents">
						<div class="cmp">
							<SiHtml5 class="icon" />
							Html
						</div>
						<div class="cmp">
							<SiCss3 class="icon" />
							CSS
						</div>
						<div class="cmp">
							<SiJavascript class="icon" />
							JS
						</div>
						<div class="cmp">
							<SiReact class="icon" />
							React
						</div>
					</div>
				</div>
				<div class="Studying">
					<div class="title">Studying</div>
					<div class="contents">
						<div class="cmp">
							<SiPandas class="icon" />
							Pandas
						</div>
						<div class="cmp">
							<SiScikitlearn class="icon" />
							Scikitlearn
						</div>
						<div class="cmp" style={{padding: '30px 10px'}}>
							<SiTensorflow class="icon" />
							TensorFlow
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default DevStack;