import React from "react"
import styled, { injectGlobal } from "styled-components"
import { Flex, Box } from 'grid-styled'

import Layout from "../components/Layout"
import Rating from "../components/Rating"
import Divider from "../components/Divider"
import Image from "../components/atoms/Image"

const skills = require("../data/skills.json")
const jobs = require("../data/jobs.json")

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

const Job = styled(Box)`
  h3 {
    margin-top: 0;

    small {
      font-weight: 300;

      &:last-of-type {
        color: #303B4E;
      }
    }
  }
`

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Flex flexWrap="wrap">
          <Box pl={32}>
            <h1 style={{ marginTop: 0 }}>
              Experiência Profissional
              <Divider width={400} />
            </h1>
          </Box>
        </Flex>

        {jobs.jobs.map(job => (
          <Flex flexWrap="wrap">
            <Box pl={32} pt={16} pb={32} width={1/6}>
              <Image src={job.company.avatar} data-rounded />
            </Box>
            <Job pl={32} pt={16} pb={32} width={5/6}>
              <h3>
                {job.position}
                <br/>
                <small>{job.company.name} ({job.company.address})</small>
                <br />
                <small>{job.date}</small>
              </h3>
              {job.description.split("\n").map(line => <p>{line}</p>)}
            </Job>
          </Flex>
        ))}

        <Flex flexWrap="wrap">
          <Box pt={16} pr={32} pb={16} pl={32} width={1}><hr/></Box>
          <Box pl={32}>
            <h1>
              Habilidades
              <Divider width={250} />
            </h1>
          </Box>
        </Flex>

        {Object.keys(skills.skills).map(value => (
          <Flex flexWrap="wrap" key={value}>
            <Box width={1} p={32} pt={0} pb={0}>
              <SubTitle>{value}</SubTitle>
            </Box>

            {skills.skills[value].map(item => (
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
