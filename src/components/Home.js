import React from 'react'
import styled from "styled-components";
import ImgSlider from './ImgSlider';

function Home() {
  return (
    <Container>
        <ImgSlider/>
    </Container>
  )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {    //---positioned div before container---
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`