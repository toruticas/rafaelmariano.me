import styled from "styled-components"
import { Flex, Box } from 'grid-styled'

import Divider from "components/Divider"
import Rating from "components/Rating"
const skills = require("../../data/skills.json")

const SubTitle = styled.h3`
  small {
    margin-left: 5px;
  }
`

const Skills = () => (
  <>
    <Flex flexWrap="wrap">
      <Box pl={32}>
        <h1>
          Habilidades
          <Divider width={450} />
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
  </>
)

export default Skills