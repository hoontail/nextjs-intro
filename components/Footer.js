import styled from "styled-components";
import ProfileBar from "./ProfileBar";
export default function Footer() {
  return (
    <Foot>
    <ProfileBar />
      <FootBox>
        <ThankU>THANK YOU FOR VISITING</ThankU>
        <div>더욱 더 발전하는 이태훈이 되겠습니다.</div>
      </FootBox>
    </Foot>
  );
}

const Foot = styled.div`
  margin-top: 150px;
  height: 240px;
  bottom: 0;
  background-color: #3482f4;
  
`;

const FootBox = styled.div`
color: #fff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 60px;
`

const ThankU = styled.div`
font-size: 24px;
font-weight: 700;
line-height: 38.4px;

`