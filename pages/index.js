

export default function Home() {
  return (
    <>

      <main>
        <h1 className={"Head"}>hoontail`s Portfolio</h1>
        <article className={"intro"}>
          <div className={"title"}>ㅇㅇㅇ 하는 개발자</div>
          <div>안녕하세요 </div>
          <div> ㅇㅇㅇㅇ 입니다</div>
          <div>저는 ㅇㅇㅇㅇ</div>
          <button> 알아보기!</button>
        </article>
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
                  <div className={"About_title"}> 생년월일</div>
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
        <article className={"Box"}>
          <div className={"title"}> SKILLS</div>
          <div> 기술스택</div>
        </article>
        <article className={"Box"}>
          <div className={"title"}> ARCHIVING</div>
          <div> 블로그/ 깃허브</div>
        </article>
        <article className={"Box"}>
          <div className={"title"}> PROJECTS</div>
          <div> 프로젝트 경험</div>
        </article>
        <footer />
        <style jsx>
          {`
            .Head {
              color: #191919;
              font-size: 24px;
              padding: 16px 24px;
              font-weight: bold;
              border-bottom: 1px solid #ccc;
              margin: 0px;
            }
            .Head:hover {
              color: brown;
            }

            .title {
              color: brown;
              display: flex;
              justify-content: center;
              font-size: 40px;
              font-weight: 900;
            }

            .intro {
              padding: 3rem;
              background-color: #fafafa;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .Box {
              width: 100%;
              max-width: 72.25rem;
              padding: 4rem 2rem;
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
              margin: 4rem 4rem 0px 4rem;
            }
            .About_icon {
              margin-right: 2rem;
            }

            .About_title {
              font-size: 20px;
              font-weight: 700;
            }
          `}
        </style>
      </main>
    </>
  );
}
