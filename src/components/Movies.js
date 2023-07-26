import React from 'react'
import styled from "styled-components";

function Movie() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img 
            src="https://th.bing.com/th/id/OIP.Q4Q81PvH3VYSbJCh1BQ6aQAAAA?w=280&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7">
          </img>
        </Wrap>
        <Wrap>
          <img 
            src="https://th.bing.com/th/id/OIP.Q4Q81PvH3VYSbJCh1BQ6aQAAAA?w=280&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7">
          </img>
        </Wrap>
        <Wrap>
          <img 
            src="https://th.bing.com/th/id/OIP.Q4Q81PvH3VYSbJCh1BQ6aQAAAA?w=280&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7">
          </img>
        </Wrap>
        <Wrap>
          <img 
            src="https://th.bing.com/th/id/OIP.Q4Q81PvH3VYSbJCh1BQ6aQAAAA?w=280&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7">
          </img>
        </Wrap>
        <Wrap>
          <img 
            src="https://th.bing.com/th/id/OIP.Q4Q81PvH3VYSbJCh1BQ6aQAAAA?w=280&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7">
          </img>
        </Wrap>
        <Wrap>
          <img 
            src="https://th.bing.com/th/id/OIP.Q4Q81PvH3VYSbJCh1BQ6aQAAAA?w=280&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7">
          </img>
        </Wrap>
        <Wrap>
          <img 
            src="https://th.bing.com/th/id/OIP.Q4Q81PvH3VYSbJCh1BQ6aQAAAA?w=280&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7">
          </img>
        </Wrap>
        <Wrap>
          <img 
            src="https://th.bing.com/th/id/OIP.Q4Q81PvH3VYSbJCh1BQ6aQAAAA?w=280&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7">
          </img>
        </Wrap>
        
      </Content>
    </Container>
  )
}

export default Movie

const Container = styled.div`

`

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0,1fr));
`

const Wrap = styled.div` 
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`