import Projectslider from "../components/Project";
import React, { useState } from "react";
export default function Home() {
  const [keyword, setKeyword] = useState(0);
  const keyword_content = [
    { id: 0, keyword: "ddd", content: "blabla" },
    { id: 1, keyword: "aaa", content: "clacla" },
    { id: 2, keyword: "www", content: "chocho" },
  ];

  return (
    <>
      <main>
        <img
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

        {/* 프로필 bar... 수정 필요 */}
        <section className={"profile_bar"}>
          <div className={"profile_intro"}>
            <div className={"icon"}>
              <span style={{ marginRight: "6px" }}>아이콘</span>
              <div>NAME</div>
            </div>
            <div style={{ margin: "0px 35px 0px 20px" }}>이태훈</div>
          </div>
          <div className={"profile_intro"}>
            <div className={"icon"}>
              <span style={{ marginRight: "6px" }}>아이콘</span>
              <div>E-MAIL</div>
            </div>
            <div style={{ margin: "0px 35px 0px 20px" }}>sper456@naver.com</div>
          </div>
          <div className={"profile_intro"}>
            <div className={"icon"}>
              <span style={{ marginRight: "6px" }}>아이콘</span>
              <div>Date of birth</div>
            </div>
            <div style={{ margin: "0px 35px 0px 20px" }}>94.04.02</div>
          </div>
          <div className={"profile_intro"} style={{ border: "none" }}>
            <div className={"icon"}>
              <span style={{ marginRight: "6px" }}>아이콘</span>
              <div>Contact</div>
            </div>
            <div style={{ margin: "0px 35px 0px 20px" }}>010-6646-6904</div>
          </div>
        </section>

        <article className={"intro_profile"}>
          <img src="/is_me_ca.png" alt="headimg" width="150" height="150" />
          <div style={{ marginLeft: "25px" }}>
            <div
              style={{ fontWeight: "800", fontSize: "16px", marginLeft: "5px" }}
            >
              제 <span style={{ color: "#3482F4" }}>키워드</span>는요!{" "}
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
                          : {  }
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
        <article className={"Box"}>
          <div className={"title"}> SKILLS</div>
          <div className={"About_box"} style={{ marginTop: "90px" }}>
            <div className={"skillcontent"}>
              <div> 기술스택</div>
              <div>
                <img
                  src="/frontskill.png"
                  alt="frontskill"
                  width="100%"
                  height="400"
                />
              </div>
            </div>

            <div className={"skillcontent"}>
              <div>공부중</div>
              <div>
                <img
                  src="/studing.png"
                  alt="frontskill"
                  width="100%"
                  height="140"
                />
              </div>
            </div>
          </div>
        </article>

        {/* 블로그/깃헙 */}
        <article className={"Box"}>
          <div className={"title"}> ARCHIVING</div>
          <div> 블로그/ 깃허브</div>
        </article>
        <article className={"Box"}>
          <div className={"title"}> PROJECTS</div>
          <div> 프로젝트 경험</div>
          <Projectslider />
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

            .profile_bar {
              background-color: #3482f4;
              padding: 13px;
              color: white;
              display: flex;
              flex-direction: row;
              justify-content: center;
            }
            .icon {
              display: flex;
              flex-direction: row;
            }
            @media screen and (max-width: 1156px) {
              .icon {
                display: none;
              }
            }
            @media screen and (max-width: 754px) {
              .profile_bar {
                display: none;
              }
            }

            .profile_intro {
              display: flex;
              flex-direction: row;
              min-width: 15%;
              max-width: 320px;
              border-right: 1px solid #fff;
              margin: 0px 20px;
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
            }
            .title {
              color: brown;
              display: flex;
              justify-content: center;
              font-size: 40px;
              font-weight: 900;
              margin: 2rem 0px;
            }

            .Box {
              width: 100%;
              max-width: 72.25rem;
              padding: 2rem 2rem;
              margin: 0 auto;
            }

            .About_box {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-between;
            }
            .About_me_card {
              display: flex;
              flex-direction: row;
              line-height: 2.3rem;
              min-width: 250px;
              margin: 3rem 0px 0px 7rem;
            }
            .About_icon {
              margin-right: 2rem;
            }

            .About_title {
              font-size: 20px;
              font-weight: 700;
            }
            .skillcontent {
            }
          `}
        </style>
      </main>
    </>
  );
}

{
  /* 프로필
        <article className={"Box"}>
          <div className={"title"}> ABOUT ME</div>
          <div className={"About_box"}>
            <div>
              <div className={"About_me_card"}>
                <div className={"About_icon"}> 아이콘</div>
                <div>
                  <div className={"About_title"}> 이름</div>
                  <div className={"About_desc"}> 이태훈</div>
                </div>
              </div>
              <div className={"About_me_card"}>
                <div className={"About_icon"}> 아이콘</div>
                <div>
                  <div className={"About_title"}>생년월일</div>
                  <div className={"About_desc"}> 94.04.02</div>
                </div>
              </div>
            </div>
            <div>
              <div className={"About_me_card"}>
                <div className={"About_icon"}> 아이콘</div>
                <div>
                  <div className={"About_title"}> 이메일</div>
                  <div className={"About_desc"}> sper456@naver.com</div>
                </div>
              </div>
              <div className={"About_me_card"}>
                <div className={"About_icon"}> 아이콘</div>
                <div>
                  <div className={"About_title"}> 연락처</div>
                  <div className={"About_desc"}> 010-6646-6904</div>
                </div>
              </div>
            </div>
          </div>
        </article> */
}
