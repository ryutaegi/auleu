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
import Profile from "./component/Profile";

// reactstrap components
import {
  Badge,
  Button,
  Card,
 
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  UncontrolledCarousel,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,

  Col,
} from "reactstrap";

// core components
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import FormIMG from './form.png';

// index page sections
import Download from "./IndexSections/Download.js";

const items = [
  {
    src: require("assets/img/main/main1.PNG"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/main/main2.PNG"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/main/main3.PNG"),
    altText: "",
    caption: "",
    header: "",
  },
];

class Main extends React.Component {

  constructor(props) {
    
    super(props);
    // Ref 생성
    this.myTargetRef = React.createRef();
    this.myTargetRef1 = React.createRef();
    this.myTargetRef2 = React.createRef();
  }

  scrollToMyTarget = () => {
    const target = this.myTargetRef.current;
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth' // 부드러운 스크롤
      });
    }
    
  };

  scrollToMyTarget1 = () => {
    const target1 = this.myTargetRef1.current;
    
    if (target1) {
      window.scrollTo({
        top: target1.offsetTop,
        behavior: 'smooth' // 부드러운 스크롤
      });
    }
   
    
  };

  scrollToMyTarget2 = () => {
    const target2 = this.myTargetRef2.current;
    
    if (target2) {
      window.scrollTo({
        top: target2.offsetTop,
        behavior: 'smooth' // 부드러운 스크롤
      });
    }
   
    
  };

 
  state = {
    iconTabs: 1,
    plainTabs: 1,
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };
  
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    
  }
  render() {
    return (
      <>
        <Navbar scrollToMyTarget={[this.scrollToMyTarget, this.scrollToMyTarget1,this.scrollToMyTarget2]} />
        

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
                      <p className="lead text-white" style={{wordBreak : 'keep-all'}}>
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
                    points="2560 0 2560 200 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg"  ref={this.myTargetRef}>
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="fa fa-book" />
                    </div>
                    <h3 style={{wordBreak : 'keep-all'}}>회사 소개</h3>
                    <p style={{wordBreak : 'keep-all'}}>
                    아우르는 청소년 대상 예술 진로교육 분야의 전문가로서 청소년들에게 재밌고 유익한 교육프로그램을 제공합니다
                    </p>
                    <ul className="list-unstyled mt-5">
                    <p style={{wordBreak : 'keep-all', fontWeight : 'bold'}}>
                    아우르 주요 예술 진로교육 프로그램
                    </p>
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

                    <ul className="list-unstyled mt-5">
                    <p style={{wordBreak : 'keep-all', fontWeight : 'bold'}}>
                    아우르 주요 공연 및 행사 프로그램
                    </p>
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
                            <h6 className="mb-0" style={{wordBreak : 'keep-all'}}>
                            토크콘서트, 힐링콘서트, 연주회 등 다양한 음악 기반 공연 프로그램 기획 및 진행
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
                            <h6 className="mb-0">학교 등의 공공기관과 기업 행사 공연 및 사회</h6>
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
                            초·중·고 아동 및 청소년 대상 특강 및 콘서트 진행
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

          <section className="section bg-secondary" >
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <div style={{paddingTop : '56.25%', width : '100%', position : 'relative', top : 0}}>
                  <iframe style={{ width: '100%', height: '100%', position: 'absolute', top : 0 }}src="https://www.youtube.com/embed/zbL1RtNKQTs?si=jLRtRXWplLrbMlF_" title="아우르 진로교육" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                </Col>
                <Col md="6">
                  <div className="pl-md-7">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                    <i className="fa fa-play"/>
                    </div>
                    <h3 style={{wordBreak : 'keep-all'}}>회사 소개 영상</h3>
                    <p style={{height : 300, wordBreak : 'keep-all'}}>
                      - 초중고 진로체험교육 및 세계시민교육을 진행합니다.<br/><br/>
                      헤어디자이너, 제과제빵사, 크리에이터, 플로리스트, 드론조종사, 마임이스트, 조향사, 여행기획자
                    </p>
                    
                   
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          
          <section ref={this.myTargetRef1}>
            <Profile/>
          </section>
          
          
          <section className="section bg-secondary"  ref={this.myTargetRef2}>
            <Container>
              <Row className="row-grid align-items-center">
              <Col className="mt-5 mt-lg-0" lg="12">
            {/* Menu */}
            <div className="mb-3">
              <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                    <i className="fa fa-play"/>
                    </div>
                    <h4>프로그램 소개</h4>
            </div>
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 1,
                    })}
                    onClick={(e) => this.toggleNavs(e, "plainTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    문화예술분야
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 2,
                    })}
                    onClick={(e) => this.toggleNavs(e, "plainTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    생활분야
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 3,
                    })}
                    onClick={(e) => this.toggleNavs(e, "plainTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    미래유망분야
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                  <TabPane tabId="plainTabs1">
                    <Row>
                  <Col className="mb-5 mb-lg-0" lg="4" md="6" >
                  <div className="px-4">
                    <img
                      alt="..."
                      className="img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/intro/intro1.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">싱어송 라이터</span>
                        <small className="h6"  style={{wordBreak : 'keep-all', display: 'block', height: '120px' }} >(이론) 음악의 종류와 관련 직업을 알아봄<br/>
                        (체험) 작사 작곡하는 방법에 대해 음악과 함께
                        배워보면서 주어진 비트에 맞춰 직접 가사 써보기 체험</small>
                        <hr/>
                        <small className="h6 text-muted" style={{wordBreak : 'keep-all'}}>주어진 비트나 음악에
                          맞는 자유주제의 짧은
                          작사 활동</small>
                      </h5>
                      
                    </div>
                  </div>
                </Col>

                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/intro/intro2.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">마임</span>
                        <small className="h6"  style={{wordBreak : 'keep-all', display: 'block', height: '120px' }} >마임이스트 직업 소개, 마임의 종류를 알아보고 가면을 쓰고 직접 마임 체험 진행</small>
                        <hr/>
                        <small className="h6 text-muted" style={{wordBreak : 'keep-all'}}>다양한 가면을 쓰고 마임을 직접 해보기</small>
                      </h5>
                      
                    </div>
                  </div>
                </Col>

                
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/intro/intro3.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">작가</span>
                        <small className="h6" style={{wordBreak : 'keep-all', display: 'block', height: '120px' }}>작가와 함께 알아보는 책 스토리텔링법<br/>
나만의 이야기 만들기 체험 진행</small>
                        <hr/>
                        <small className="h6 text-muted" style={{wordBreak : 'keep-all'}}>자유 주제의 나만의 이야기를 글로 작성해보기</small>
                      </h5>
                      
                    </div>
                  </div>
                </Col>

                
                </Row>
                  </TabPane>
                  <TabPane tabId="plainTabs2">
                    <Row>
                    <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/intro/intro4.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">시각 디자인</span>
                        <small className="h6" style={{ wordBreak : 'keep-all', display: 'block', height: '120px' }}>시각디자이너가 되기 위한 준비와
시각디자이너가 하는 일들과 진로에 대해 알아봄</small>
                        <hr/>
                        <small className="h6 text-muted" style={{wordBreak : 'keep-all'}}>각자가 수업에 배운
                        내용을 바탕으로
                        본인만의 디자인아이템
                        고민하여 만들어보기</small>
                      </h5>
                      
                    </div>
                  </div>
                </Col>

                  <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/intro/intro5.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">사회복지</span>
                        <small className="h6" style={{wordBreak : 'keep-all', display: 'block', height: '120px' }}>고령화되는 한국 사회, 시니어 분야에 대해 알아보고 치매 예방 방지를 위해 많이 하는 컵타 활동 진행</small>
                        <hr/>
                        <small className="h6 text-muted" style={{wordBreak : 'keep-all'}}>치매방지용 컵타
배워보기</small>
                      </h5>
                      
                    </div>
                  </div>
                </Col>

                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/intro/intro6.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">헤어 디자이너</span>
                        <small className="h6" style={{wordBreak : 'keep-all', display: 'block', height: '120px' }}>헤어 디자이너의 직업과 헤어디자이너로서의 삶에 대해 알아보고 헤어 디자인 체험 진행</small>
                        <hr/>
                        <small className="h6 text-muted" style={{wordBreak : 'keep-all'}}>(가발)나만의 헤어 디자인
만들기</small>
                      </h5>
                      
                    </div>
                  </div>
                </Col>

                <Col className="mb-5 mb-lg-0 mt-7" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/intro/intro7.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">요리</span>
                        <small className="h6" style={{wordBreak : 'keep-all', display: 'block', height: '120px' }}>전문 요리사와 함께하는 요리 분야 직업 소개 및 요리 체험 진행</small>
                        <hr/>
                        <small className="h6 text-muted" style={{wordBreak : 'keep-all'}}>비건 샌드위치 만들기</small>
                      </h5>
                      
                    </div>
                  </div>
                </Col>

                <Col className="mb-5 mb-lg-0 mt-7" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/intro/intro8.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">바리스타(특강)</span>
                        <small className="h6" style={{wordBreak : 'keep-all', display: 'block', height: '120px' }}>커피의 유래와 현황, 종류에 대해 알아보고 직접
커피를 내려보는 바리스타 체험 진행</small>
                        <hr/>
                        <small className="h6 text-muted" style={{wordBreak : 'keep-all'}}>드림 커피 or 라떼아트</small>
                      </h5>
                      
                    </div>
                  </div>
                </Col>

                <Col className="mb-5 mb-lg-0 mt-7" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/intro/intro9.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">플로리스트</span>
                        <small className="h6" style={{wordBreak : 'keep-all', display: 'block', height: '120px' }}>계절별 피어나는 식물들과 식물들 종류마다 필요 환경이 다름을 알아본 뒤 플로리스트에게 요구되는 섬세함과 창의성을 이해하고, 이를 느낄 수 있는 체험 활동 진행</small>
                        <hr/>
                        <small className="h6 text-muted" style={{wordBreak : 'keep-all'}}>나만의 미니정원, 미니화분 등
식물 활용 창의 체험</small>
                      </h5>
                      
                    </div>
                  </div>
                </Col>

                </Row>
                  </TabPane>
                  <TabPane tabId="plainTabs3">
                    <Row>
                    <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/intro/intro10.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">영상 기획자</span>
                        <small className="h6" style={{wordBreak : 'keep-all', display: 'block', height: '120px' }}>유망 직업으로 떠오르는 크리에이터 직업 소개 및
유투브 영상 만들기 체험 진행</small>
                        <hr/>
                        <small className="h6 text-muted" style={{wordBreak : 'keep-all'}}>1분 유튜브 영상 기획 및
제작 체험 활동</small>
                      </h5>
                      
                    </div>
                  </div>
                </Col>

                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/intro/intro11.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">여행 기획자(특강)</span>
                        <small className="h6" style={{wordBreak : 'keep-all', display: 'block', height: '120px' }}>아직 여행지로 잘 알려지지 않은 국내외 지역의
여행 상품을 기획하는 직업 여행기획자에 대해
알아보고 관광지 기념 머그컵 제작 체험</small>
                        <hr/>
                        <small className="h6 text-muted" style={{wordBreak : 'keep-all'}}>내 주변에 있는 가볼
만한 곳의 여행상품
기획 or 기념 머그컵 제작</small>
                      </h5>
                      
                    </div>
                  </div>
                </Col>

                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/intro/intro12.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">이미자 컨설턴트</span>
                        <small className="h6" style={{wordBreak : 'keep-all', display: 'block', height: '120px' }}>개인이나 단체의 성격/특성에 적합한 이미지를
만들어주는 이미지 컨설턴트에 대해 알아보고
강사와 함께 나만의 이미지를 찾아보는 체험 진행</small>
                        <hr/>
                        <small className="h6 text-muted" style={{wordBreak : 'keep-all'}}>각자의 취향, 성격 및
특성에 맞는 이미지
만들기</small>
                      </h5>
                      
                    </div>
                  </div>
                </Col>

                <Col className="mb-5 mb-lg-0 mt-7" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/intro/intro13.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">글로벌 진로(특강)</span>
                        <small className="h6" style={{wordBreak : 'keep-all', display: 'block', height: '120px' }}>글로벌 시대, 세계시민으로서의 자세를 알아보고
세계화로 인한 진로, 직업의 변화에 대해 교육
세계 국가나 직업을 매개로 한 머그컵 제작 활동</small>
                        <hr/>
                        <small className="h6 text-muted" style={{wordBreak : 'keep-all'}}>세계 국기, 직업 등의
이미지를 그려보고
머그컵 만들어보기</small>
                      </h5>
                      
                    </div>
                  </div>
                </Col>

                <Col className="mb-5 mb-lg-0 mt-7" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/intro/intro14.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">드론</span>
                        <small className="h6" style={{wordBreak : 'keep-all', display: 'block', height: '120px' }}>4차산업 및 드론 활용 직업을 알아보고
평소 체험하기 어려운 드론을 직접 조종하는 활동을
통해 미래유망직업에 관한 관심을 키움</small>
                        <hr/>
                        <small className="h6 text-muted" style={{wordBreak : 'keep-all'}}>직접 드론 조종 및
드론을 활용한 활동
체험</small>
                      </h5>
                      
                    </div>
                  </div>
                </Col>

                </Row>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
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
