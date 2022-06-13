import Projectslider from "../components/Project";

export default function Home() {
  return (
    <>
      <main>
        <img src="/headimg.png" alt="headimg" width="100%" height="600"
         style={{verticalAlign: "bottom"}}
         
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


        <section className={"profile_bar"}>
          <div>dd</div>
        </section>

        <article className={"intro_profile"}>
          <div>안녕하세요 </div>
          <div> ㅇㅇㅇㅇ 입니다</div>
          <div>저는 ㅇㅇㅇㅇ</div>
          <button> 알아보기!</button>
        </article>

        {/* 프로필 */}
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
              left: 8rem;
              color: white;
              font-size: 72px;
              line-height: 72px;
              letter-spacing: -1px;
              font-weight: 700;
              font-family: "Gmarket Sans";
            }

            .intro_intro {
              position: absolute;
              top: 22rem;
              left: 8rem;
              color: white;
              font-size: 22px;
              line-height: 32px;
              letter-spacing: -1px;

              font-family: "Gmarket Sans";
            }

            .profile_bar {
              background-color: #3482F4;
              padding: 13px;
              color: white;
            }

            .title {
              color: brown;
              display: flex;
              justify-content: center;
              font-size: 40px;
              font-weight: 900;
              margin: 2rem 0px;
            }

            .intro_profile {
              padding: 3rem;
              background-color: #fafafa;
              display: flex;
              flex-direction: column;
              align-items: center;
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
