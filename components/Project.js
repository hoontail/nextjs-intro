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
    <Slider {...settings} style={{maxWidth:"200px"}}>
      <Container>
        <h3>1</h3>
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

  min-width: 250px;
  min-height: 250px;
`;
