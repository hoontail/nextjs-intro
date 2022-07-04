import Projectslider from "../components/Project";
import React, { useState , useRef} from "react";
import Link from "next/link";
import ProfileBar from "../components/ProfileBar";
import ScrollEffect from "../components/ScrollEffect";
export default function Home() {
  const profileRef  = useRef(null);
  const skillRef = useRef(null);
  const archivingRef = useRef(null);
  const projectRef = useRef(null);
  //Ref 쉽게만드는법 없나
  const [keyword, setKeyword] = useState(0);
  const scrollToElement = () => profileRef?.current?.scrollIntoView();
  const keyword_content = [
    {
      id: 0,
      keyword: "비전",
      content:
        "새로운 것에 대한 도전에 즐거움을 느끼며, 개발을 통해 주변의 불편함을 해결하고 의미있는 가치를 창출 할 줄 아는 개발자를 꿈꾸고 있습니다. ",
    },
    {
      id: 1,
      keyword: "무거운",
      content:
        "컴퓨터 앞에서 주당 100시간을 투자 할 수 있는 엉덩이가 무거운 개발잡니다. ",
    },
  ];

  return (
    <>
    <ScrollEffect profileRef={profileRef} skillRef={skillRef} archivingRef={archivingRef} projectRef={projectRef}/>
      <main>
        <img
          className={"headimg"}
          src="/headimg.png"
          alt="headimg"
          width="100%"
          height="650"
          style={{ verticalAlign: "bottom" }}
        />

        <section>
          <div className={"intro_title"}>
            HOONTAIL'S <br />
            PORTFOLIO
          </div>
          <div className={"intro_intro"}>
            안녕하세요 미래를 항해하는 <br /> 개발자
            <span style={{ fontWeight: "700" }}> 이태훈</span> 입니다
          </div>
        </section>
<div  ref={profileRef}/>
        {/* 프로필 bar... 수정 필요 */}
        <ProfileBar  />

        <article className={"intro_profile"} >
          <img src="/is_me_ca.png" alt="profileimg" width="150" height="150" />
          <div>
            <div
              style={{ fontWeight: "800", fontSize: "16px", marginLeft: "5px" }}
            >
              제 <span style={{ color: "#3482F4" }}>키워드</span>는요!
            </div>
            <div className={"keword_button_box"}>
              {keyword_content.map((k, index) => {
                return (
                  <>
                    <div
                      className={"keword_button"}
                      onClick={() => {
                        setKeyword(index);
                      }}
                      style={
                        keyword === index
                          ? { backgroundColor: "#3482f4", color: "#fff" }
                          : {}
                      }
                    >
                      {k.keyword}
                    </div>

                    {index === keyword && (
                      <div className={"key_content"} key={index}>
                        {k.content}
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </article>

        {/* 기술스택 */}
          <div ref={skillRef}/>
        <article className={"Box"} >
          <div className={"Wrap_box"} style={{ marginTop: "60px" }}>
            <div className={"skill_Box_me"}>
              <div className={"skillcontent"} style={{ marginBottom: "35px" }}>
                신입 프론트앤드 개발자 
                <br /> 이태훈 입니다!
              </div>
              <div className={"is_me_content"}>
                <img
                  className={"study_img"}
                  src="/hanghae_01.PNG"
                  alt="hanghae"
                  width="100%"
                  height="140"
                  
                />
                <div style={{marginTop:"8px"}}>
                항해 부트캠프를 통해 매 주 새로운 팀원들과 100시간씩 투자하고,
                기간 동안 매일을 기록하여 협업 능력, 기록하는 습관 및 공부의 자세를
                갖췄습니다.</div>
              </div>
            </div>
            <span className={"line"}></span>

            <div className={"skill_Box"}>
              <div className={"skillcontent"} > My Skills</div>
              <img
                className={"skill_img"}
                src="/frontskill.png"
                alt="frontskill"
                width="100%"
                height="300"
              />
            </div>

            <span className={"line"}></span>

            <div className={"skill_Box"}>
              <div className={"skillcontent"} style={{ paddingBottom: "10px" }}>
                I'm studing
              </div>
              <img
                className={"study_img"}
                src="/studing.png"
                alt="studing1"
                width="100%"
                height="140"
              />
            </div>
          </div>
        </article>

        {/* 블로그/깃헙 */}
     
        <article className={"Box"} ref={archivingRef}>
          <div className={"title"}   > Archiving</div>
          <div className={"Wrap_box"}>
            <div className={"archiving_box"}>
              <div>
                <img
                  src="/github.png"
                  alt="github"
                  width="134px"
                  height="42px"
                />
              </div>
              <div className={"archiving_content"}  >
                <p style={{ margin: "2rem 0" }}>
                  <span style={{ fontWeight: "900" }}>소스코드 저장소</span>{" "}
                  입니다.
                </p>
                <p>과거 프로젝트,앱의 소스 코드</p>
                <p>부트캠프 항해 과정에서 배운 소스 코드</p>
                <p>혼자서 코딩 연습을 위해 저장하던 소스 코드</p>
              </div>
              <Link href={"https://github.com/hoontail"}>
                <button className={"move_btn"} style={{ margin: "3rem 0" }}>
                  바로가기
                </button>
              </Link>
            </div>

            <div className={"line"} />

            <div className={"archiving_box"}>
              <div>
                <img src="/tstory.png" alt="tstory" />
              </div>
              <div className={"archiving_content"}>
                <p style={{ margin: "2rem 0" }}>
                  <span style={{ fontWeight: "900" }}>기록하는 습관</span>을
                  위한 블로그 입니다.
                </p>
                <p>공부한 것을 복습하기 위한 기록</p>
                <p>웹 관련 지식 정리 및 회고를 통한 기록</p>
                <p>공유를 통한 선한 영향력 행사</p>
              </div>
              <Link href={"https://hoontail.tistory.com/"}>
                <button className={"move_btn"} style={{ margin: "3rem 0" }}>
                  바로가기
                </button>
              </Link>
            </div>
          </div>
        </article>

        <article className={"Box"} ref={projectRef}>
          <div className={"title"}> Projects</div>
          <div className={"Wrap_box"}>
            <div>
              <Projectslider seuchida_imgslider />
            </div>
            <div>
              <Projectslider seuchida_intro />
            </div>
          </div>
          <div className={"Wrap_box"}>
            <div>
              <Projectslider clone_imgslider />
            </div>
            <div>
              <Projectslider clone_intro />
            </div>
          </div>
          <div className={"Wrap_box"}>
            <div>
              <Projectslider portfolio_imgslider />
            </div>
            <div>
              <Projectslider portfolio_intro />
            </div>
          </div>
        </article>
        <footer />
        <style jsx>
          {`
            .intro_title {
              position: absolute;
              top: 10rem;
              left: 15rem;
              color: white;
              font-size: 60px;
              line-height: 60px;
              letter-spacing: -1px;
              font-weight: 700;
              font-family: "Gmarket Sans";
            }

            .intro_intro {
              position: absolute;
              top: 20.5rem;
              left: 15rem;
              color: white;
              font-size: 22px;
              line-height: 32px;
              letter-spacing: -1px;

              font-family: "Gmarket Sans";
            }
            .Box {
              padding: 0 16rem;
            }

            .title {
              font-size: 32px;
              line-height: 40px;
              font-weight: 700;
              letter-spacing: 0.1px;
              margin: 10rem 0 8rem 0;
            }

            .intro_profile {
              padding: 5rem 15rem;
              background-color: #f9f9f9;
              display: flex;
              font-size: 16px;
            }

            .keword_button_box {
              display: flex;
              flex-direction: row;
            }

            .keword_button {
              margin: 14px 5px;
              border: 1px solid #3d84eb;
              padding: 6px 16px;
              border-radius: 60px;
              font-weight: 700;
              cursor: pointer;
              color: #3d84eb;
            }

            .keword_button:hover {
              color: #fff;
              background-color: #3d84eb;
            }

            .key_content {
              position: absolute;
              margin: 65px 0px 0px 8px;
              max-width: 550px;
              line-height: 25.6px;
              padding-right: 20px;
            }

            .skillcontent {
              font-size: 24px;
              font-weight: 800;
              line-height: 33px;
              letter-spacing: -1px;
              margin-top: 2rem;
            }
            .skill_Box {
              max-width: 400px;
            }
            .line {
              border: 1px dashed #c5c5c5;
            }
            .is_me_content {
              color: #5c5c5c;
              font-weight: 400;
              font-size: 16px;
              line-height: 160%;
              word-break: keep-all;
              max-width: 350px;
            }

            .Wrap_box {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-between;
              margin: 8rem 0;
            }

            .archiving_box {
              flex-direction: column;
              min-width: 45%;
            }

            .archiving_content {
              color: #373f41;
              line-height: 20px;
              letter-spacing: 0.2px;
              font-size: 16px;
            }

            .project_box {
              display: flex;
              flex-direction: row;
            }

            @media screen and (max-width: 1803px) {
              .Box {
                padding: 0 11rem;
              }
            }

            @media screen and (max-width: 1467px) {
              .study_img {
                width: 320px;
              }
              .skill_img {
                width: 330px;
              }
            }
            @media screen and (max-width: 1170px) {
              .line {
                display: none;
              }
            }

            @media screen and (max-width: 1156px) {
              .icon {
                display: none;
              }
              .Box {
                padding: 0 5rem;
              }
            }
            @media screen and (max-width: 906px) {
              .intro_profile {
                padding: 5rem 3rem;
              }
            }
            @media screen and (max-width: 754px) {
              .profile_bar {
                display: none;
              }
            }
            @media screen and (max-width: 628px) {
              .intro_title {
                left: 27px;
                font-size: 48px;
              }
              .intro_intro {
                font-size: 21px;
                left: 27px;
              }
              .intro_profile {
                padding: 5rem 0.5rem;
              }
              .headimg {
                height: 530px;
              }
              .Box {
                padding: 0 2rem;
              }
              .Wrap_box {
                justify-content: space-between;
                margin: 3rem 0;
              }
              .title {
                margin: 0;
              }
              .key_content {
                font-size: 12px;
              }
              .keword_button{
                font-size: 11px;
              }
            }
          `}
        </style>
      </main>
    </>
  );
}
