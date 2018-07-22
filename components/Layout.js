import Navbar from "./Navbar"
import Footer from "./Footer"
import styled, { injectGlobal } from "styled-components"

import Container from "./atoms/Container"

injectGlobal`
  body {
    margin: 0;
    color: #303B4E;
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
