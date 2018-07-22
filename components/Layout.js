import Navbar from "./Navbar"
import Footer from "./Footer"
import styled, { injectGlobal } from "styled-components"

import Container from "./atoms/Container"

injectGlobal`
  body {
    margin: 0;
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
