import React from "react"
import styled, { keyframes } from "styled-components"

const transform = keyframes`
0% { transform: scaleX(0); }
100% { transform: scaleX(1); }
`

export default styled.hr`
  height: 3px;
  background-image: linear-gradient(90deg, #266DD3, #FF00FF);
  transform-origin: 0px 0px 0px;
  animation: ${transform} 2s ease-out forwards;
  margin: 0px;
  border-width: 0px;
  margin-top: 5px;
  opacity: 1;

  width: ${props => props.width}px;
`
