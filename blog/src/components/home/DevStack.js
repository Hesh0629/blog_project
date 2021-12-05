import React from 'react';
import { SiCplusplus, SiPython,SiHtml5 ,SiCss3,SiJavascript,SiReact,SiNodedotjs,SiKeras,SiPandas} from 'react-icons/si';
import '../style/devStack.scss';
const DevStack = () => {
	return (
		<div class="DevStack">
			<h1 style={{margin:'0', padding:'30px 0'}}>
				<small>
					<del>(빈약하지만)</del>
				</small>{' '}
				Develop Stack
			</h1>
			<div class="language">
				<div class="title">language</div>
				<div class="contents">
					<div class="cmp">
						<SiCplusplus class="icon"/>
						C++<br/>(main)
					</div>
					<div class="cmp">
						<SiPython  class="icon"/>
						Python<br/>(sub)
					</div>
				</div>
			</div>
			<div class="web">
				<div class="title">Web</div>
				<div class="contents">
					<div class="cmp">
						<SiHtml5  class="icon"/>
						Html
					</div>
					<div class="cmp">
						<SiCss3  class="icon"/>
						CSS
					</div>
					<div class="cmp">
						<SiJavascript  class="icon"/>
						JS
					</div>
					<div class="cmp">
						<SiReact  class="icon"/>
						React
					</div>
				</div>
			</div>
			<div class="Studying">
				<div class="title">Studying</div>
				<div class="contents">
					<div class="cmp">
						<SiNodedotjs  class="icon"/>
						Node.js
					</div>
					<div class="cmp">
						<SiKeras  class="icon"/>
						Keras
					</div>
					<div class="cmp">
						<SiPandas  class="icon"/>
						Pandas
					</div>
				</div>
			</div>
		</div>
	);
};
export default DevStack;