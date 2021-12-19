import React from 'react';
import useScrollFadeIn from './useScrollFadeIn';
import '../style/DogSound.scss';
import mclarenLogo from './img/mclaren.png';
const DogSound = () => {
	const effect = useScrollFadeIn('down');
	const effect2 = useScrollFadeIn('down');
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
						특히 유전 정보와 질병 분석에 관심이 있습니다.
						<br />
						그렇기에 Data science와 Computer Vision에 대하여 공부 중입니다.
					</div>
				</div>
				<div class="wrapper" {...effect2}>
					<div class="big">커피와 F1을 좋아합니다.</div>
					<img
					src={mclarenLogo}
					width="500px"
					height="70px"
					alt="mclaren"
					/>
					<div class="text">
						부모님이 예가체프를 수능 보러 가는 날 내려주신 뒤로 커피에 눈을 떴습니다.
						<br /> 학교 앞 카페에서 브루잉 클래스를 열어줘서 덕분에 좋은 커피들을 찾아다니고
						있습니다. <br />
						원두의 생물학적 종과 지역별 품종, 로스팅 그리고 브루잉까지 책까지 사가며 공부할 정도로
						커피를 좋아합니다. <br />
						그중에서도 과테말라 지역 원두와 예가체프를 좋아합니다. <br />
						F1 경기가 있는 날 커피를 내리고 밤 경기를 볼 때면 세상 행복할 수가 없습니다. <br />
						<small>
							물론 업데이트를 어떻게 했는지 시즌 후반으로 갈수록 느려지는 우리 팀 차량과 타이어
							전략을 볼 때면 커피잔 옆에 술잔이 살포시 생겨납니다.
						</small>
					</div>
				</div>
			</div>
		</>
	);
};
export default React.memo(DogSound);