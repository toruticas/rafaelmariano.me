import React from "react"
import styled from "styled-components"
import Head from 'next/head';
import { Flex, Box } from 'grid-styled'

import Layout from "components/Layout"
import Rating from "components/Rating"
import Divider from "components/Divider"
import Image from "components/atoms/Image"

import Academic from './Academic'
import Skills from './Skills'
import Jobs from './Jobs'

const ExperiencePage = () => (
  <Layout>
    <Head>
      <title>Rafael Mariano - Experiências</title>
    </Head>
    <Academic />
    <Jobs />
    {/* <Skills /> */}
  </Layout>
);

export default ExperiencePage;
