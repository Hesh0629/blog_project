import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import useScrollFadeIn from './useScrollFadeIn';
import '../style/News.scss';

const News = () => {
    const effect = useScrollFadeIn('right');
	return (
		<>
			<div class="News" {...effect}>
                <div class="big">
                    이 사람 요즘 뭐하나요?
                    <div class="small">
                        이 사이트가 소개하는 사람이면서 만든 사람의 근황을 올리는 곳입니다.
                    </div>
                </div>

                <div class="wrapper" className="d-flex flex-column">
                    <Button color="outline-dark" id="toggle1" className="w-75 h-100">
                        <div class="title">
                            # 2022.06.25
                        </div>
                    </Button>
                    <UncontrolledCollapse toggler="#toggle1" className="m-0 p-0" >
                        <Card class="">
                            <CardBody class="content">
                                2022년도 1학기를 마지막으로 제 휴학이 같이 종료되었습니다.<br/>
                                한 학기 동안 알고리즘하고 ML위주로 공부했는데 큰 성과를 거둔지는 모르겠습니다.<br/>
                                네이버 클로바 AI RUSH 참가는 최종 합격하였고 SKT 인턴 결과를 기다리고 있습니다. <br/>
                                실제 모델 개발 경험이 많지 않아서 합격하기 힘들 것 같지만 좋은 경험이었던 것 같습니다.
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>
                <div class="wrapper" className="d-flex flex-column">
                    <Button color="outline-dark" id="toggle2" className="w-75 h-100">
                        <div class="title">
                            # 2022.12.19
                        </div>
                    </Button>
                    <UncontrolledCollapse toggler="#toggle2" className="m-0 p-0" >
                        <Card class="">
                            <CardBody class="content">
                                22년도 가을학기가 끝났습니다.<br/>
                                살면서 이리 힘든 적은 처음이였어요.
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>
            </div>
		</>
	);
};
export default React.memo(News);