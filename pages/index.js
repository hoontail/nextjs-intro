import {useState} from "react"
import NavBar from "../components/NavBar"


export default function Home(){

  return (
    <div>
      <NavBar/>
      <h1>hello</h1>
      {/* 글로벌만 추가해주면 전역 (최상위여서 그런가 ?) */}
      <style jsx global>  
        {`
          a{
            color:white
          }
        `}

      </style>

    </div>

  )
}