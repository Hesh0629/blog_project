import React from 'react';
import useScrollFadeIn from './useScrollFadeIn';
import '../style/DogSound.scss';
import mclarenLogo from './img/mclaren.png';
import kendo from './img/kendo.jpg';
const DogSound = () => {
	const effect = useScrollFadeIn('down');
	const effect2 = useScrollFadeIn('down');
	const effect3 = useScrollFadeIn('down');
	return (  
		<>
			<div class="dogSound">
				<div class="wrapper" {...effect}>
					<div class="big">데이터를 다루는 것을 좋아합니다.</div>
					<div class="small">(아직 미숙하지만요)</div>
					<div class="text">
						원래는 생물학을 공부하고 싶었고 다양한 경험을 하고 싶어서 그런지 컴퓨터공학은 시작이
						늦었습니다.
						<br />
						그러다가 우연한 기회로 AI 공부	를 시작하면서 흥미를 붙이기 시작했고, 지금도 부족하지만 꾸준히 공부중입니다.
						<br />
						특히 사람들에게 큰 영향을 주는 유전 정보와 질병 진단에 관심이 있습니다.
						<br />
						그렇기에 Data science와 Computer Vision에 대하여 공부 중입니다.
					</div>
				</div>
				<div class="wrapper" {...effect2}>
					<div class="big">커피와 F1을 좋아합니다.<img src={mclarenLogo} width="320px" height="95px" style={{position:"absolute", paddingLeft:"20px"}} alt="mclarenF1 Car"/></div>
					<div class="small reallyDogSound">"<small>(올해는 글렀지만) </small>내년 컨챔 우승은 멕라렌!"</div>
					<div class="text">
						부모님이 수능 보러 가는 날 예가체프를 내려주신 뒤로 커피에 눈을 떴습니다.
						<br /> 학교 앞 카페에서 브루잉 클래스를 열어줘서 덕분에 좋은 커피들을 찾아다니고
						있습니다. <br />
						원두의 생물학적 종과 지역별 품종, 로스팅 그리고 브루잉까지 책까지 사가며 공부할 정도로
						커피를 좋아합니다. <br />
						그중에서도 과테말라 지역 원두와 예가체프, 최근에는 파나마에서 나오는 원두를 좋아합니다. <br />
						그런데 왜 F1 이야기는 없냐고요? <b>올해 저희 팀은 망했거든요 (...)</b><br />
					</div>
				</div>
				<div class="wrapper" {...effect3}>
					<div class="big">같이 검도하실래요?<img src={kendo} width="350px" style={{position:"absolute", width:"350px", paddingLeft:"400px", boxSizing:"content-box"}}/></div>
					<div class="small reallyDogSound">"뉴비 환영"</div>
					<div class="text">
						초등학교때 시작했다가, 중학교 때 초단을 따고 그만둔 검도를 대학교 때 다시 시작해서 지금도 하고 있습니다. <br/>
						아직 자세가 좋진 않지만 열심히 고쳐나가고 있어요. 목표는 크게 없지만 배려하는 검도와 예쁜 검도를 지향합니다.<br/>
						(사실 승패와 같은 결과보다 자세를 좀 더 신경쓰는 중입니다!)<br/>
						기술도 기술이지만 살면서 필요한 여러가지를 배울 수 있어서 꾸준히 시간내서 다니고 있답니다.<br/>	
					</div>
				</div>
			</div>
		</>
	);
};
export default React.memo(DogSound);