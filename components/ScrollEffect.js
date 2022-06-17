import React from "react";
import styled from "styled-components";

const ScrollEffect = () => {
  const [ScrollY, setScrollY] = React.useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = React.useState(false);
  function handleScroll() {
    if (ScrollY > 200) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }
  console.log(ScrollY , ScrollActive)
  React.useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  return (
    <>
     <GoTop>dfdf</GoTop>
      { ScrollActive && (<FixedNav>
          <FixdeNavtextBox ScrollActive>
            <NavMenu
              onClick={() => {
                window.scrollTo({ top: 594, left: 0, behavior: "smooth" });
              }}
            >
              About me
            </NavMenu>
            <NavMenu
              onClick={() => {
                window.scrollTo({ top: 925, left: 0, behavior: "smooth" });
              }}
            >
              Skills
            </NavMenu>
            <NavMenu     onClick={() => {
                window.scrollTo({ top: 1475, left: 0, behavior: "smooth" });
              }}
           
            >
              Archiving
            </NavMenu>
            <NavMenu
               onClick={() => {
                window.scrollTo({ top: 2132, left: 0, behavior: "smooth" });
              }}>Projects</NavMenu>
          </FixdeNavtextBox>
        </FixedNav>)
    }
    </>
  );
};
// 2962
export default ScrollEffect;

const FixedNav = styled.div`
  width: 100%;
  top: 0;
  min-width: 100vw;
  border-radius: 0;
  background-color: white;
  height: 60px;
  border-bottom: 1px solid #dddddd;
  z-index: 99;
  position: fixed;

`;

const FixdeNavtextBox = styled.div`
  padding: 0 16rem;
  display: flex;
  align-items: center;
  flex-direction: row;


  height: 60px;
`;

const NavMenu = styled.div`
  color: #222222;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif !important;
  font-weight: 550 !important;
  font-size: 14px !important;
  line-height: 20px !important;
  margin-right: 50px;
  padding: 30px 0px;
  cursor: pointer;
  &:hover {
    color:#3d84eb;
  }
`;

const GoTop = styled.div`
position: fixed;
bottom: 30px;
right: 30px;
background-color: green;

`