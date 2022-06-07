import { useState } from "react";


export default function Home() {
  return (
    <div>
      
      <section className={"Head"}>LTH`s Portfolio</section>
      <h1>ㅇㅇㅇ 하는 개발자</h1>
      <style jsx>{`
        h1{
          color: brown;
          display:flex;
          justify-content: center;
        }
        .Head{
          color: #191919;
          font-size: 24px;
          padding: 8px 24px;
          font-weight: bold;
          
        } 
        .Head:hover{
          color : brown;
        }
        `}

      </style>
    </div>
  );
}
