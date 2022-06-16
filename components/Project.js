import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
const Project = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // 스치다 프로젝트 이미지
  if (props.seuchida_imgslider) {
    return (
      <>
        <StyledImgSlider {...settings}>
          <Container>
            <Box>
              <Seuchida src="/seuchida_01.png" alt="github" />
            </Box>
          </Container>
          <Container>
            <Box>
              <ImageBox
                src="/seuchida_02.png"
                alt="github"
                style={{ marginRight: "12px" }}
              />
              <ImageBox src="/seuchida_03.png" alt="github" />
            </Box>
          </Container>
          <Container>
            <Box>
              <ImageBox
                src="/seuchida_04.png"
                alt="github"
                style={{ marginRight: "12px" }}
              />
              <ImageBox src="/seuchida_05.png" alt="github" />
            </Box>
          </Container>
          <Container>
            <Box>
              <ImageBox
                src="/seuchida_06.png"
                alt="github"
                style={{ marginRight: "12px" }}
              />
              <ImageBox src="/seuchida_07.png" alt="github" />
            </Box>
          </Container>
          <Container>
            <Box>
              <ImageBox
                src="/seuchida_08.png"
                alt="github"
                style={{ marginRight: "12px" }}
              />
            </Box>
          </Container>
        </StyledImgSlider>
      </>
    );
  }
  //  스치다 프로젝트 설명
  if (props.seuchida_intro) {
    return (
      <>
        <StyledSlider {...settings}>
          <IntroBox>
            <ProjectTitle>스치다!</ProjectTitle>{" "}
            <span>위치 기반 운동친구 찾기 서비스</span>
            <Bluetag> About</Bluetag>
            <div>
              개발자 6명 디자이너2명, 총 8명의 팀프로젝트의 리더를 맡아
              진행하면서{" "}
              <span style={{ fontWeight: "800" }}>
                협업에 대한 전반적인 이해와 기획 및 일정 관리의 중요성을 파악
              </span>
              할 수 있었고, 기술적 챌린지를 통해{" "}
              <span style={{ fontWeight: "800" }}>
                websocket 에 대한 이해와 최적화 작업에 대한 경험
              </span>
              을 얻을 수 있었습니다.
            </div>
            <Bluetag> 개발기간</Bluetag>
            <span>22.05 ~ 22.06 6주</span>
            <Bluetag> 핵심기능</Bluetag>
            <div>
              위치기반 주변 게시글 찾기 및 거리 계산, 실시간 알람 및 채팅
            </div>
          </IntroBox>
          <IntroBox>
            <Bluetag> 역할</Bluetag>
            <ul>
              <li>socket.io 라이브러리를 활용한 채팅, 강퇴,알림 기능 구현</li>
              <li>
                KaKao Map API와 geolocation을 활용 하여 실시간 위치 및
                게시글과의 거리를 시각적 확인 및 거리 표시
              </li>
              <li>
                browser-image-compression 라이브러리를 활용한 이미지 리사이징
                -&gt; 렌더링 속도 개선
              </li>
              <li> 메인 페이지 및 상세,모든 리스트 페이지, 채팅,내주변 페이지 구현</li>
              <li>PWA 적용으로 모바일 환경 최적화</li>
              <li>
                120명의 유저에 대한 피드백 개선 -&gt; 앱의 특성상 주변 게시글
                확인만 가능하였으나 유저 피드백을 통한 전체 게시글 조회 추가
              </li>
            </ul>
          </IntroBox>
          <IntroBox>
            <Bluetag>기술</Bluetag>
            <div>
              React, Redux, Redux-thunk, KaKaoMap, socket.io, PWA, Github
              Actions, AWS S3
            </div>
            {/* <button className={"move_btn"} style={{ marginRight: "25px" }}>
              Notion
            </button> */}

            <Link href={"https://github.com/seuchida/seuchida_FE"}>
              <button className={"move_btn"} style={{ margin: "3rem 0" }}>
                Github
              </button>
            </Link>
          </IntroBox>
        </StyledSlider>
      </>
    );
  }

  // 클론 프로젝트 이미지
  if (props.clone_imgslider) {
    return (
      <>
        <StyledImgSlider {...settings}>
          <Container>
            <Box>
              <Seuchida src="/air_02.png" alt="airclone" />
            </Box>
          </Container>
          <Container>
            <Box>
              <Seuchida src="/air_04.png" alt="airclone" />
            </Box>
          </Container>
          <Container>
            <Box>
              <Seuchida src="/air_03.png" alt="airclone" />
            </Box>
          </Container>
          <Container>
            <Box>
              <Seuchida src="/air_01.png" alt="airclone" />
            </Box>
          </Container>
          <Container>
            <Box>
              <Seuchida src="/air_05.png" alt="airclone" />
            </Box>
          </Container>
        </StyledImgSlider>
      </>
    );
  }
  //   클론 프로젝트 설명
  if (props.clone_intro) {
    return (
      <>
        <StyledSlider {...settings}>
          <IntroBox>
            <ProjectTitle>에어 비앤비 클론코딩 </ProjectTitle>
            <Bluetag>About</Bluetag>
            <div>
            1주일간 진행 했던 airBnB 클론 코딩 입니다.
            댓글 CRUD, 스크롤 이벤트, 검색기능, position sticky를 활용 해 보았으며, 뷰 작업을 섬세하게 다루는 경험을 해보았습니다.
            </div>
            <Bluetag>개발기간</Bluetag>
            <span> 22.05~22.05 , 일주일</span>
          </IntroBox>
          <IntroBox>
            <Bluetag>역할</Bluetag>
            <ul>
              <li>댓글 CRUD 및 검색기능 구현</li>
              <li>
                kakao map API를 활용한 게시글 위치 표시
              </li>
              <li> 스크롤 이벤트를 통한 navigation bar 생성 및 클릭시 이동</li>
              <li>섬세한 뷰 작업</li>
              <li>반응형 웹 사이트 제작</li>
            </ul>
            <Bluetag>기술</Bluetag>
            <Box>
              <div>React, Redux, KaKaoMap, AWS S3</div>
              <Link href={"https://github.com/cloneMini/cloneNewFE"}>
                <button className={"move_btn"} style={{ margin: "0 2rem" }}>
                  Github
                </button>
              </Link>
            </Box>
          </IntroBox>
        </StyledSlider>
      </>
    );
  }
  // 포트폴리오 프로젝트 이미지
  if (props.portfolio_imgslider) {
    return (
      <>
        <StyledImgSlider {...settings}>
          <Container>
            <Box>
              <Seuchida src="/port_01.png" alt="github" />
            </Box>
          </Container>
          <Container>
            <Box>
              <Seuchida src="/port_02.png" alt="github" />
            </Box>
          </Container>
        </StyledImgSlider>
      </>
    );
  }
  //   포트폴리오 프로젝트 설명
  if (props.portfolio_intro) {
    return (
      <>
        <StyledSlider {...settings}>
          <IntroBox>
            <ProjectTitle>개인 포트폴리오 프로젝트</ProjectTitle>
            <Bluetag>About</Bluetag>
            <div>
              현재 보고 계신 웹사이트로 Next.js에 대한 공부와 팀 프로젝트 진행 당시 경험 하지 못한 배포
              환경 및 반응형 웹사이트를 스스로 구축해보기 위해 현재 진행중인
              프로젝트 입니다. Next.js의 작동방식에 대하여 이해하는 과정에
              있습니다.
            </div>
            <Bluetag>개발기간</Bluetag>
            <span> 22.06~22.06 , 3일</span>
          </IntroBox>
          <IntroBox>
            <Bluetag>역할</Bluetag>
            <ul>
              <li>Next.js 를 활용한 프로젝트 구성</li>
              <li>
                SEO 최적화 작업 간단하게 진행 -&gt; google 검색시 노출 성공
              </li>
              <li> github action 을 통한 CI/CD 환경 구축</li>{" "}
              <li>CloudFront 를 통한 https 배포</li>
              <li>반응형 웹 사이트 제작</li>
            </ul>
            <Bluetag>기술</Bluetag>
            <Box>
              <div>Next.Js, Github Actions, AWS S3</div>
              <Link href={"https://github.com/hoontail/nextjs-intro"}>
                <button className={"move_btn"} style={{ margin: "0 2rem" }}>
                  Github
                </button>
              </Link>
            </Box>
          </IntroBox>
        </StyledSlider>
      </>
    );
  }

  return <></>;
};

export default Project;

const Container = styled.div`
  min-height: 400px;
  cursor: pointer;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
`;

const IntroBox = styled.div`
  * {
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
  }
  li {
    margin: 8px 0px;
  }
  min-height: 490px;
  padding: 40px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1); */
  cursor: pointer;
  @media screen and (max-width: 1296px) {
    max-width: 490px;
  }
`;
const StyledSlider = styled(Slider)`
  /* .slick-slide {
    margin: 0 10px;
  } */
  min-height: 490px;

  .slick-list {
    width: 740px;

    @media screen and (max-width: 1616px) {
      width: 550px;
    }
    @media screen and (max-width: 1425px) {
      width: 450px;
    }
    @media screen and (max-width: 1325px) {
      width: 350px;
    }
    @media screen and (max-width: 851px) {
      margin-top: 60px;
      width: 345px;
    }
  }
`;
const StyledImgSlider = styled(Slider)`
  .slick-list {
    width: 550px;
    min-height: 415px;
    @media screen and (max-width: 1425px) {
      width: 450px;
    }
    @media screen and (max-width: 1296px) {
      width: 345px;
    }
  }
`;
const ProjectTitle = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.1px;
  color: #000000;
  margin-right: 15px;
`;

const Bluetag = styled.div`
  font-weight: 500;
  color: #3d84eb;
  margin: 2rem 0;
`;

const ImageBox = styled.img`
  width: 240px;
  height: 490px;
  @media screen and (max-width: 1296px) {
    width: 165px;
  }
`;
const Seuchida = styled.img`
  height: 490px;
  width: 500px;
  @media screen and (max-width: 1296px) {
    width: 340px;
  }
`;
