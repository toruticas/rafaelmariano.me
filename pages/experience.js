import React from "react"
import styled, { injectGlobal } from "styled-components"
import { Flex, Box } from 'grid-styled'

import Layout from "../components/Layout"
import Rating from "../components/Rating"
import Divider from "../components/Divider"

const data = require("../data/skills.json")

injectGlobal`
  body {
    margin: 0;
  }
`

const Container = styled.div`
  padding: 20px 40px;
`

const Row = styled.div`
  display: flex;
`

const Col = styled.div`
  flex: ${props => props.md};
`

const SubTitle = styled.h3`
  small {
    margin-left: 5px;
  }
`

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Flex flexWrap="wrap">
          <Box pl={32}>
            <h1>
              Habilidades
              <Divider width={300} />
            </h1>
          </Box>
        </Flex>

        {Object.keys(data.skills).map(value => (
          <Flex flexWrap="wrap" key={value}>
            <Box width={1} p={32} pb={0}>
              <SubTitle>
                {value}
                <small>({data.skills[value].length})</small>
              </SubTitle>
            </Box>

            {data.skills[value].map(item => (
              <Box width={1/2} p={32} pt={1} pb={1} key={item.name}>
                <Rating name={item.name} note={item.value}/>
              </Box>
            ))}
          </Flex>
        ))}
      </Layout>
    )
  }
}

export default Index
