import { useState } from "react";

export default function Home() {
  return (
    <div>
      <section className={"Head"}>LTH`s Portfolio</section>
      <article className={"intro"}>
        <span className={"title"}>ㅇㅇㅇ 하는 개발자</span>
        <div>안녕하세요  </div>
        <div> ㅇㅇㅇㅇ 입니다</div>
        <div>저는 ㅇㅇㅇㅇ</div>
        <button> 알아보기!</button>
      </article>
      <article className={"Box"}>
      <span className={"title"}>  ABOUT ME</span>
        <div> 이름/생년월일/연락처/이메일</div>
      </article>
      <article className={"Box"}>
      <span className={"title"}>  SKILLS</span>
        <div> 기술스택</div>
      </article>
      <article className={"Box"}>
      <span className={"title"}>  ARCHIVING</span>
        <div> 블로그/ 깃허브</div>
      </article>
      <article className={"Box"}>
      <span className={"title"}>  PROJECTS</span>
        <div> 프로젝트 경험</div>
      </article>
      <footer/>
      <style jsx>
        {`
        .Head {
            color: #191919;
            font-size: 24px;
            padding: 16px 24px;
            font-weight: bold;
            border-bottom: 1px solid #ccc;
          }
          .Head:hover {
            color: brown;
          }

          .title {
            color: brown;
            display: flex;
            justify-content: center;
            font-size: 32px;
            font-weight: 900;
          }
          img {
            width: 100%;
            height: 500px;
          }
     
          .intro {
            padding: 3rem;
            background-color: #fafafa;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .Box {
            padding:3rem;
          }
        `}
      </style>
    </div>
  );
}
