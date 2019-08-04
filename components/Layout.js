import Navbar from "./Navbar"
import Footer from "./Footer"
import styled, { createGlobalStyle } from "styled-components"

import Container from "./atoms/Container"

// https://coolors.co/266dd3-586273-888098-cfb3cd-dfc2f2

createGlobalStyle`
  body {
    margin: 0;
    color: #303B4E;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #194687;
    ${'' /* color: #303B4E; */}
  }

  a {
    color: #1C509A;
    text-decoration: none;

    :visited{
      color: #465164;
    }

    :hover {
      text-decoration: underline;
      color: black;
    }
  }

  hr {
    border-color: #EBF1FB;
    opacity: 0.5;
    height: 1px;
  }
`

export default ({ children }) => (
  <React.Fragment>
    <Container>
      <Navbar />

      {children}

      <Footer />
    </Container>
  </React.Fragment>
)
