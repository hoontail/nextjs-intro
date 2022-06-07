import { useState } from "react";

export default function Home() {
  return (
    <div>
      <section className={"Head"}>LTH`s portfolio</section>
      <h1>ㄴㅇㄹ</h1>
      <style jsx>{`
        h1{
          color: brown;
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
