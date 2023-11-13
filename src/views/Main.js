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
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import FormIMG from './form.png';

// index page sections
import Download from "./IndexSections/Download.js";

class Main extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <Navbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        아우르 진로교육{" "}
                        
                      </h1>
                      <p className="lead text-white">
                      "예술에 대한 열정을 성공적인 직업으로 변화시킬 여정인 예술 진로 교육 프로젝트를 소개합니다!"
                      </p>
                      
                    </Col>
                  </Row>
                </div>
              </Container>
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
            {/* 1st Hero Variation */}
          </div>
          
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("./image.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="fa fa-book" />
                    </div>
                    <h3>아우르 주요 예술 진로교육 프로그램</h3>
                    <p>
                    아우르는 청소년 대상 예술 진로교육 분야의 전문가로서 청소년들에게 재밌고 유익한 교육프로그램을 제공합니다
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="fa fa-music" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            초·중·고등학생 대상 싱어송라이터 체험
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="fa fa-music" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">초·중·고등학생 대상 밴드체험</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="fa fa-music" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            초·중·고등학생 대상 작곡 체험
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/zbL1RtNKQTs?si=jLRtRXWplLrbMlF_" title="아우르 진로교육" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  
                </Col>
                <Col md="6">
                  <div className="pl-md-7">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>아우르 소개 영상</h3>
                    <p style={{height : 300}}>
                      - 초중고 진로체험교육 및 세계시민교육을 진행합니다.<br/><br/>
                      헤어디자이너, 제과제빵사, 크리에이터, 플로리스트, 드론조종사, 마임이스트, 조향사, 여행기획자
                    </p>
                    
                   
                  </div>
                </Col>
              </Row>
            </Container>
          </section>


          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">구글폼 신청</h2>
                  <p className="lead text-white">
                    아래 이미지를 클릭하면 교육 신청이 가능합니다.
                  </p>
                  <div style={{marginTop : 20, display : 'flex', alignItems : 'center', justifyContent : 'center', height : 400, textAlign : 'center'}}>
                  <a href="https://www.naver.com">
                    <div style={{width : 300, backgroundColor : 'white', borderRadius : 20}}>
                    <img src={FormIMG}/>
                    </div>
                    </a>
                  </div>
                
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  
                </Col>
                
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
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

         
        </main>
        <Footer />
      </>
    );
  }
}

export default Main;
