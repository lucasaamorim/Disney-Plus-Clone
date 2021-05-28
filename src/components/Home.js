import React from "react";
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import styled from "styled-components"

const Home = () => {
  return (
  <div>
    <Container >
        <ImgSlider />
        <Viewers/>
        <Movies/>
    </Container>
  </div>
  );
};

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
`