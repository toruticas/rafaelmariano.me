import { Flex, Box } from 'grid-styled'

import Divider from "components/Divider"

const Academic = () => (
  <Flex flexWrap="wrap">
    <Box pl={32}>
      <h1>
        Formação Acadêmica
        <Divider width={450} />
      </h1>
      <p>
        <strong>Universidade de São Paulo</strong>
      </p>
      <p>
        Sistemas de Informação
        <br />
        Janeiro de 2016 - Dezembro de 2019
      </p>
      <p>
        Engenharia de Computação
        {' '}
        <small>(incompleto)</small>
        <br />
        Janeiro de 2011 - Dezembro de 2014
      </p>
    </Box>
  </Flex>
)

export default Academic;