import React from "react"
import styled from "styled-components"
import fetch from "isomorphic-unfetch"
import Head from 'next/head';
import { Flex, Box } from 'grid-styled'

import Layout from "components/Layout"
import Rating from "components/Rating"
import Divider from "components/Divider"

import Image from "components/atoms/Image"
import Col from "components/atoms/Col"
import Row from "components/atoms/Row"

import TypeWriter from './TypeWriter'
import Articles from './Articles'

const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 24px;
`

const Home = ({ articles }) => (
  <Layout>
    <Head>
      <title>Rafael Mariano</title>
    </Head>
    <Flex flexWrap="wrap">
      <Box p={16} pt={0} width={[1, 5/12, 5/12, 1/4]}>
        <div style={{ padding: "0 10px" }}>
          <Image src="/static/images/me.jpg" data-rounded/>
        </div>
      </Box>

      <Box p={16} pt={0} width={[1, 7/12, 7/12, 3/4]}>
        <Title>
          Rafael Mariano (Olinda)
          <Divider width={400} />
        </Title>
        
        <p style={{ marginTop: 0 }}>
          Bacharel em Sistemas de Informação pela Universidade de São Paulo e líder técnico de frontend na Arquivei. Engajado com a comunidade de desenvolvedores, evangelista sobre server-side rendering, garantindo qualidade de software com testes automatizados e foco total na agilidade.
        </p>
        
        <TypeWriter />
      </Box>

      <Box pt={16} pr={32} pb={16} pl={32} width={1}><hr/></Box>
    </Flex>

    <Articles articles={articles} />
  </Layout>
)

Home.getInitialProps = async function() {
  const url = process.env.NODE_ENV === "production"
    ? "https://rafaelmariano.me/medium"
    : "http://localhost:3000/medium"

  const response = await fetch(url)
  const articles = await response.json()

  return { articles }
}

export default Home
