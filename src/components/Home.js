import React, {useEffect} from 'react'
import styled from "styled-components";
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';



function Home() {
 
  // It will run whenever you will reload page or upload something
  useEffect(()=>{
    db.collection("movies").onSnapshot((snapshot)=>{
      console.log(snapshot);
    })
  }, [])

  return (
    <Container>
        <ImgSlider/>
        <Viewers />
        <Movies />
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
        background: url("/images/home-background.png") center center / cover;
        no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`
