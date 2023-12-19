/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";


// core components
import Navbar from "../Navbar";
import Footer from "../Footer";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  
  render() {
    return (
      <>
       
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/image01.png")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center text-center"
                      lg="4" md="12"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="d-lg-inline-block d-md-block mr-0 mt-1 mx-md-auto"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          thekoomusic@naver.com
                        </Button>
                        <Button
                          className="d-lg-inline-block d-md-block mr-0 mt-1 mx-md-auto"
                          color="info"
                          href="https://www.instagram.com/the_koo_music/"
                          size="sm"
                        >
                          @the_koo_music
                        </Button>
                      </div>
                    </Col>

                    <Col className="order-lg-1" lg="4" md="12">
                      <div className="card-profile-stats d-flex justify-content-center float-lg-left text-md-center">
                      <img
                            alt="..."
                            src={require("assets/img/profile/qr.png")}
                            style={{height : 130}}
                          />
                        
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3 style={{fontWeight : 'bold'}}>
                    구 현 모{" "}
                     
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Hyun Mo KOO
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      가수 ・ 작곡가 ・ 진로체험 강사 등 다양한 예술활동을 진행해오고 있습니다.<br/>
                      MBC 위대한 탄생 3 ‘제2의 이문세’<br/>
                      위로의 싱어송라이터<br/>
                      학창시절 5년간의 Dancer 활동, 수상경력<br/>
                      요리전공, 호주 시드니에서 5년이상의 Chef 경력. a.k.a '노래하는 요리사’
                    </div>
                    <div style={{textAlign : 'left', marginLeft : '15%', marginTop : 40}}>
                     
                      <strong>주요 역량:</strong><br/>
                      청소년 진로 멘토링 특강 / 힐링콘서트<br/>
                      어린이부터 장년층까지 모든 세대를 아우르는 무대 경험<br/>
                      도전 · 꿈 · 희망 · 진로 · 힐링 · 위로 등의 주제로 강연 경험 다수<br/><br/>

                      <strong>수상경력:</strong><br/>
                      -민주평화통일자문회의 대양주협의회 주최 [통일노래 경연대회] 대상 (2006')<br/>
                      -호주한인문화재단 주최[K-Idol] 대상 (2009')<br/><br/>

                      <strong>활동 경력:</strong><br/>
                      - AUG 삼성배구단 호주 전지훈련 [삼성 vs 호주 국가대표 친선경기] 애국가 대표 제창 (2007')<br/>
                      - 순국선열의 날 기념공연 시드니 한인행사 ["역사 속으로, 사람 속으로"] 시인 윤동주 역 (2010')<br/>
                      - 호주 한인 라디오 "98.5 FM 시드니 라디오 등대" "Music & Life" 코너 진행 (2010')<br/>
                      - [김광석 다시 부르기 in Sydney] 오프닝 게스트 (2012')<br/>
                      - [DJ DOC 콘서트 in Sydney] 오프닝 게스트 (2012')<br/>
                      - MBC 듀엣가요제 정규편성 제1회 F(x) 루나와 듀엣 종합무대. 종합 2위 (2016')<br/>
                      - 구현모 밴드 결성<br/><br/>
                    </div>
                    </div>
                  
                  
                  <Row>
              <Col className="mb-5 mb-md-0 mt-2" md="4">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="https://www.youtube.com/watch?v=XUQlDR0-oPs" style={{textAlign : 'center'}}>
                    <CardImg
                      alt="..."
                      src={require("assets/img/profile/profile1.PNG")}
                    />
                    <div className="h6 mt-2">위대한 탄생3 출연영상</div>
                  </Link>
                </Card>
              </Col>
              <Col className="mb-5 mb-md-0 mt-2" md="4">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="https://www.youtube.com/watch?v=H1rovCvTXPc" style={{textAlign : 'center'}}>
                    <CardImg
                      alt="..."
                      src={require("assets/img/profile/profile2.PNG")}
                    />
                    <div className="h6 mt-2">K-star 인터뷰 영상</div>
                  </Link>
                </Card>
              </Col>
              <Col className="mb-5 mb-md-0 mt-2" md="4">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="https://tv.naver.com/v/1010788" style={{textAlign : 'center'}}>
                    <CardImg
                      alt="..."
                      src={require("assets/img/profile/profile3.png")}
                    />
                    <div className="h6 mt-2">MBC 듀엣가요제</div>
                  </Link>
                </Card>
              </Col>
              
            </Row>

            <div className="mt-5 py-5 border-top text-center">
                    
                  </div>
                </div>
                
              </Card>
            </Container>
           
          </section>
        </main>
       
      </>
    );
  }
}

export default Profile;
