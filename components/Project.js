import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} style={{ maxWidth: "400px" }}>
      <Container>
        <Box>
          <img src="/seuchida_02.png" alt="github" width={185} style={{marginRight:"8px"}}/>
          <img src="/seuchida_03.png" alt="github" width={185} />
        </Box>
      </Container>
      <Container>
        <h3>2</h3>
      </Container>
      <Container>
        <h3>3</h3>
      </Container>
    </Slider>
  );
};

export default Project;

const Container = styled.div`
  width: 400px;
  min-height: 400px;

`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
`;
