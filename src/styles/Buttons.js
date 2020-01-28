import styled, { css } from 'styled-components';

export const Buttons = styled.a`
  width: 100%;
  max-width: 5rem;
  padding: 1em;
  text-align: center;
  font-weight: 700;
  border-radius: 4px;
  /* passes down props to check it has one or not and set a default of white */
  color: ${props => props.color ? props.color : "white"};
  background-color: ${props => props.bgcolor ? props.bgcolor : "black"};
  cursor: pointer;
  margin: 0 2rem;
  font-size: 0.5em;
  text-decoration: none;

  ${props => props.outline && css`
    background: transparent;
    border: 2px solid #000;
    color: #000;
  `}
  ${
    props => props.primary && css`
    background: #805ad5;
  `}
  ${
    props => props.secondary && css`
    background: #4fd1c5;
  `}
`