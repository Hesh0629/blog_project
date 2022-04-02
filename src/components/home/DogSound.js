import React from 'react';
import useScrollFadeIn from './useScrollFadeIn';
import '../style/DogSound.scss';
import mclarenLogo from './img/mclaren.png';
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
						하지만 다양한 공부와 경험들은 저를 이끌어주고 있답니다.
						<br />
						꿈은 인체와 관련된 데이터들을 수집, 가공하여 의미 있게 사용될 수 있도록 분석하는
						것입니다.
						<br />
						특히 유전 정보와 질병 진단에 관심이 있습니다.
						<br />
						그렇기에 Data science와 Computer Vision에 대하여 공부 중입니다.
					</div>
				</div>
				<div class="wrapper" {...effect2}>
					<div class="big">커피와 F1을 좋아합니다.<img src={mclarenLogo} width="320px" height="95px" style={{position:"absolute",top:"25px",paddingLeft:"20px"}} alt="mclarenF1 Car"/></div>
					<div class="small reallyDogSound">"올해는 망했지만 내년 우승은 멕라렌!"</div>
					<div class="text">
						부모님이 수능 보러 가는 날 예가체프를 내려주신 뒤로 커피에 눈을 떴습니다.
						<br /> 학교 앞 카페에서 브루잉 클래스를 열어줘서 덕분에 좋은 커피들을 찾아다니고
						있습니다. <br />
						원두의 생물학적 종과 지역별 품종, 로스팅 그리고 브루잉까지 책까지 사가며 공부할 정도로
						커피를 좋아합니다. <br />
						그중에서도 과테말라 지역 원두와 예가체프를 좋아합니다. <br />
						F1 경기가 있는 날 커피를 내리고 밤 경기를 볼 때면 세상 행복할 수가 없습니다. <br />
						<small>
							+ (2022.03.24) 개막전 바레인 GP를 보니 올해는 완전히 망한듯 싶습니다.<br/>
							규정 개편되고 기회라고 생각했는데 엔진, 에어로, 드라이버 삼위일체로 망했네요. <br/>
							사실 나... 티포시였을지도...?
						</small>
					</div>
				</div>
				<div class="wrapper" {...effect3}>
					<div class="big">같이 검도하실래요?</div>
					<div class="text">
						초등학교때 시작했다가, 중학교 때 초단을 따고 그만둔 검도를 대학교 때 다시 시작해서 지금도 하고 있습니다. <br/>
						아직 자세가 좋진 않지만 열심히 고쳐나가고 있어요. 목표는 크게 없지만 배려하는 검도와 예쁜 검도를 지향합니다.<br/>
						기술도 기술이지만 살면서 필요한 여러가지를 배울 수 있어서 꾸준히 시간내서 다니고 있답니다.<br/> 
						5살 꼬맹이부터 올해 여든을 맞이하는 어르신들까지, 누구나 오래할 수 있s는 검도!  같이 하실 생각 없으신가요<br/>
						<b><em>문의는 서강 검우회에 주세요!</em></b>
					</div>
				</div>
			</div>
		</>
	);
};
export default React.memo(DogSound);