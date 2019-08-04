import styled from "styled-components"
import { Flex, Box } from 'grid-styled'

import Image from "components/atoms/Image"
import Divider from "components/Divider"

const jobs = require("../../data/jobs.json")

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

  ul {
    padding-left: 16px;

    li {
      margin: 8px 0;
    }
  }
`

const Jobs = () => (
  <>
    <Flex flexWrap="wrap">
      <Box pl={32}>
        <h1 style={{ marginTop: 40 }}>
          Experiência Profissional
          <Divider width={450} />
        </h1>
      </Box>
    </Flex>

    {jobs.jobs.map((job, index) => (
      <Flex flexWrap="wrap" key={job.date}>
        <Box pl={32} pt={16} pt={index === 0 ? 3 : job.company.avatar ? 32 : 0} width={1/6}>
          {job.company.avatar ? (
            <Image src={job.company.avatar} data-rounded />
          ) : false}
        </Box>
        <Job pl={32} pt={16} pt={index === 0 ? 3 : job.company.avatar ? 32 : 0} width={5/6}>
          <h3>
            {job.position}
            <br/>
            <small>{job.company.name} ({job.company.address})</small>
            <br />
            <small>{job.date}</small>
          </h3>
        
          <ul>
            {job.description.map((topic, topicIndex) => (
              <li key={topicIndex}>{topic}</li>
            ))}
          </ul>
        </Job>
      </Flex>
    ))}
  </>
)

export default Jobs;