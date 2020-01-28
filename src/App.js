import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Buttons} from './styles/Buttons'

import styled, {css} from 'styled-components';

const Wrapper = styled.section`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 2rem;
`

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  .row {
    width: 100%;
    display: flex;
  }
`

const SubHeader = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2.4rem
`

function App() {
  return (
    <Wrapper>
      <Container>
        <SubHeader>Buttons</SubHeader>
        <div className="row">
          <Buttons>Button</Buttons>
          <Buttons outline>Button</Buttons>
          <Buttons primary>Button</Buttons>
          <Buttons secondary>Button</Buttons>
        </div>
      </Container>
    </Wrapper>
  );
}

export default App;
