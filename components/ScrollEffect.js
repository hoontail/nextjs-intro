import React from "react";
import styled from "styled-components";


const ScrollEffect = ({profileRef, skillRef,projectRef, archivingRef}) => {
  const [ScrollY, setScrollY] = React.useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = React.useState(false);
  function handleScroll() {
    if (ScrollY > 15) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }

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
       <FixedNav ScrollActive={ScrollActive}>
          <FixdeNavtextBox >
            <NavMenu
            ScrollActive={ScrollActive}
              onClick={() => {
                window.scrollTo({ top: profileRef?.current?.offsetTop, left: 0, behavior: "smooth" });
              }}
            >
           
              Profile
            </NavMenu>
            <NavMenu
            ScrollActive={ScrollActive}
              onClick={() => {
                window.scrollTo({ top: skillRef?.current?.offsetTop, left: 0, behavior: "smooth" });
              }}
            >
              Skills
            </NavMenu>
            <NavMenu     
            ScrollActive={ScrollActive}
            onClick={() => {
                window.scrollTo({ top: archivingRef?.current?.offsetTop, left: 0, behavior: "smooth" });
              }}
           
            >
              Archiving
            </NavMenu>
            <NavMenu
            ScrollActive={ScrollActive}
               onClick={() => {
                window.scrollTo({ top: projectRef?.current?.offsetTop, left: 0, behavior: "smooth" });
              }}>Projects</NavMenu>
          </FixdeNavtextBox>
        </FixedNav>
    
    </>
  );
};
// 2962
export default ScrollEffect;

const FixedNav = styled.div`
  width: 100%;
  top: 0;
  color: white;
  background-color:  ${(props) => (props.ScrollActive===true ? '#fff' : "null")};
  height: 60px;
  /* border-bottom: 1px solid #dddddd; */
  z-index: 99;
  position: fixed;
  /* @media screen and (max-width: 600px) {
    background-color: gray;
  } */

`;

const FixdeNavtextBox = styled.div`
  padding: 0 15rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 60px;
    @media screen and (max-width: 600px) {
    padding : 0 8rem;

  }
    @media screen and (max-width: 490px) {
    padding : 0 1.5rem;

  }
`;

const NavMenu = styled.div`
  color: ${(props) => (props.ScrollActive===true ? 'black' : "#fff")};
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif !important;
  font-weight: 550 !important;
  font-size: 14px;
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