import Head from "next/head";
import Top from "./BlogHead";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>hoontail-Portfolio</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="신입 프론트앤드 개발자 이태훈 포트폴리오 페이지 입니다"
        />
        <meta keyword="이태훈 포트폴리오" />
        <meta property="og:title" content="hoontail Portfolio" />
        <meta property="og:description" content="이태훈 포트폴리오" />
        <meta
          property="og:image"
          content="https://image.zdnet.co.kr/2021/03/19/e1481ebc5e762f55fd93c94a395486dd.jpg"
        />
        <meta property="og:url" content="https://www.hoontail-portfolio.com" />
      </Head>
      <Top/>
      <div>{children}</div>
    <Footer/>
   
    </>
  );
}
