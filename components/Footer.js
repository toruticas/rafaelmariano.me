import styled from "styled-components"

import { Flex, Box } from 'grid-styled'

const Footer = styled.div`
  margin-top: 32px;
  padding: 32px;
  ${'' /* border-top: 1px solid #AFAFAF; */}
  text-align: center;
`

export default () => (
  <Flex flexWrap="wrap" alignItems="center">
    <Box p={30} width={1}><hr/></Box>

    <Box p={30} pt={0} width={1}>
      <div style={{ textAlign: "center" }}>
        &copy; 2017
        Rafael Mariano de Castro Silva
        <br/><br />

        <a href="mailto:toruticas@gmail.com">
          <img src="/static/images/icon-email.svg" />
        </a>

        <a href="https://www.github.com/toruticas">
          <img src="/static/images/icon-github.svg" />
        </a>

        <a href="https://www.linkedin.com/in/toruticas">
          <img src="/static/images/icon-linkedin.svg" />
        </a>

        <a href="https://medium.com/feed/@toruticas">
          <img src="/static/images/icon-rss.svg" />
        </a>
      </div>
    </Box>
  </Flex>
)
