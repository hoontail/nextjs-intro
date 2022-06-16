import React from 'react';

const ProfileBar = () => {
  return (
    <>
              <section className={"profile_bar"}>
          <div className={"profile_intro"}>
            <div className={"icon"}>
              <span style={{ marginRight: "6px" }}>아이콘</span>
              <div>NAME</div>
            </div>
            <div style={{ margin: "0px 35px 0px 20px" }}>이태훈</div>
          </div>
          <div className={"profile_intro_del"}>
            <div className={"icon"}>
              <span style={{ marginRight: "6px" }}>아이콘</span>
              <div>E-MAIL</div>
            </div>
            <div style={{ margin: "0px 35px 0px 20px" }}>sper456@naver.com</div>
          </div>
          <div className={"profile_intro_del"}>
            <div className={"icon"}>
              <span style={{ marginRight: "6px" }}>아이콘</span>
              <div>Date of birth</div>
            </div>
            <div style={{ margin: "0px 35px 0px 20px" }}>94.04.02</div>
          </div>
          <div className={"profile_intro"} style={{ border: "none" }}>
            <div className={"icon"}>
              <span style={{ marginRight: "6px" }}>아이콘</span>
              <div>Contact</div>
            </div>
            <div style={{ margin: "0px 35px 0px 20px" }}>010-6646-6904</div>
          </div>
        </section>
   <style jsx>{`
     
   .profile_bar {
              background-color: #3482f4;
              padding: 13px;
              color: white;
              display: flex;
              flex-direction: row;
              justify-content: center;
            }
            .icon {
              display: flex;
              flex-direction: row;
            }
            .profile_intro {
              display: flex;
              flex-direction: row;
              min-width: 15%;
              max-width: 320px;
              border-right: 1px solid #fff;
              margin: 0px 20px;
            }
            .profile_intro_del {
              display: flex;
              flex-direction: row;
              min-width: 15%;
              max-width: 320px;
              border-right: 1px solid #fff;
              margin: 0px 20px;
            }
            @media screen and (max-width: 1156px) {
              .icon {
                display: none;
              }
            }
            @media screen and (max-width: 754px) {
              .profile_intro_del {
                display: none;
              }
            }
     `}
   </style>
   </>
  );
};

export default ProfileBar;