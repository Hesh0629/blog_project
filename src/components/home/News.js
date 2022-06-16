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
                            # 아직
                        </div>
                    </Button>
                    <UncontrolledCollapse toggler="#toggle1" className="m-0 p-0" >
                        <Card class="">
                            <CardBody class="content">
                                a<br/>
                                b<br/>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>

                <div class="wrapper" className="d-flex flex-column">
                    <Button color="outline-dark" id="toggle2" className="w-75 h-100">
                        <div class="title">
                            # 공사중
                        </div>
                    </Button>
                    <UncontrolledCollapse toggler="#toggle2" className="m-0 p-0" >
                        <Card class="">
                            <CardBody class="content">
                                a<br/>
                                b<br/>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>

                <div class="wrapper" className="d-flex flex-column">
                    <Button color="outline-dark" id="toggle3" className="w-75 h-100">
                        <div class="title">
                            # 입니다.
                        </div>
                    </Button>
                    <UncontrolledCollapse toggler="#toggle3" className="m-0 p-0" >
                        <Card class="">
                            <CardBody class="content">
                                a<br/>
                                b<br/>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>
            </div>
		</>
	);
};
export default React.memo(News);