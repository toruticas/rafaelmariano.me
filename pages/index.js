import React from "react"
import styled, { keyframes } from "styled-components"
import fetch from "isomorphic-unfetch"
import { Flex, Box } from 'grid-styled'

import Layout from "../components/Layout"
import Rating from "../components/Rating"
import Divider from "../components/Divider"

import Image from "../components/atoms/Image"
import Col from "../components/atoms/Col"
import Row from "../components/atoms/Row"

const data = require("../data/skills.json")

const typing = keyframes`
  from, to { border-right: 2px solid transparent; }
  50% { border-right: 2px solid black; }
`

const TypeWriter = styled.p`
  height: 18px;
  text-align: center;
`

const TypeWriterPipe = styled.span`
  border-right: 2px solid black;
  height: 18px;
  margin-left: 1px;
  ${props => props.typing ? "" : `animation: ${typing} 1.2s linear infinite;` }
`

const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 24px;
`

const Article = styled.a`
  h2 {
    margin: 0;

    small {
      margin-left: 15px;
      font-size: 14px;
    }
  }

  div {
    margin-top: 12px;
  }

  span {
    margin-right: 10px;
    height: 10px;
    background-color: #EFEFEF;
    padding: 3px;
    border: 1px;
  }
`

class Index extends React.Component {
  intro = [
    "Frontend Engineer at @arquivei (lead)",
    "Bruto, Rustico e Sistemático",
    "I make internet",
    "Fofurizador de interfaces",
    "Comedor de ovos",
  ]

  state = {
    typed: "",
    currentMessage: 0,
    currentPosition: 0,
    rewinding: false,
    typing: false,
  }

  timeout = null

  componentWillMount() {
    this.setState({ currentMessage: 0, currentPosition: this.intro[0].length })
  }

  componentWillUnmount() {
    try {
      clearTimeout(this.timeout)
    } catch (e) {}
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.typeAction()
    }, 1000);
  }

  typeAction = () => {
    const message = this.intro[this.state.currentMessage]
    this.setState({ typing: true })

    if (this.state.rewinding) {
      // console.log("rewinding", this.state.currentMessage, this.state.currentPosition);
      if (this.state.currentPosition > 0) {
        this.timeout = setTimeout(() => {
          this.setState({ currentPosition: this.state.currentPosition - 1 })
          this.typeAction()
        }, 30)
      } else {
        this.setState({ typing: false })

        this.timeout = setTimeout(() => {
          if (this.state.currentMessage + 1 < this.intro.length) {
            this.setState({ currentMessage: this.state.currentMessage + 1 })
          } else {
            this.setState({ currentMessage: 0 })
          }

          this.setState({ currentPosition: 0, rewinding: false })

          this.typeAction()
        }, 1000)
      }
    } else if (this.state.currentPosition < message.length) {
      // console.log("foward", this.state.currentMessage, this.state.currentPosition);
      this.setState({ currentPosition: this.state.currentPosition + 1 })

      this.timeout = setTimeout(() => {
        this.typeAction()
      }, Math.random() * (70 - 30) + 30)
    } else {
      // console.log("waiting", this.state.currentMessage, this.state.currentPosition);
      this.setState({ typing: false })
      this.timeout = setTimeout(() => {
        this.setState({ rewinding: true })
        this.typeAction()
      }, 4000)
    }
  }

  render() {
    return (
      <Layout>
        <Flex flexWrap="wrap">
          <Box pl={32} width={1}>
            <Title>
              Rafael Mariano (Olinda)
              {/* <Divider width={400} /> */}
            </Title>
          </Box>

          <Box p={16} pt={0} width={[1, 5/12, 5/12, 1/3 ]}>
            <div style={{ padding: "0 10px" }}>
              <Image src="/static/images/me.jpg" data-rounded/>
            </div>
            <TypeWriter>
              {this.intro[this.state.currentMessage].slice(0, this.state.currentPosition)}
              <TypeWriterPipe typing={this.state.typing} />
            </TypeWriter>
          </Box>

          <Box p={16} pt={0} width={[1, 7/12, 7/12, 2/3]}>
            <p style={{ marginTop: 0 }}>
              Sou bacharel<strike>ando</strike> em Sistemas de Informação pela Universidade de São Paulo, apaixonado por computação, música, cinema e história. Atualmente sou <strong>Frontend Software Engineer (Lead)</strong> na <a href="https://arquivei.com.br">Arquivei</a>, uma startup de dados residente na cidade de São Carlos - São Paulo.
            </p>

            <p>
              A minha afinidade com a programação começou bem cedo. Digitei o meu primeiro código antes dos 10 anos de idade reproduzindo algoritmos em G-BASIC dos manuais do <a href="http://retrogamernes.blogspot.com.br/2014/01/magic-computer-pc95-dynacom-videogames.html">Magic Computer PC95</a> que meu pai me dara. Aos 15 escrevi meus primeiros códigos em HTML com auxílio do <a href="https://pt.wikipedia.org/wiki/Microsoft_FrontPage">Microsoft Front Page</a> criando sites com conteúdos relacionado a games, sobretudo o Counter-Strike, e sobre a história do Egito antigo.
            </p>

            <p>
              Profissionalmente eu trabalho com arquitetura flux, javascript isomórfico, imutabilidade, NodeJS e React	&lt;3. Me considero proficiente em javascript. Desenvolvi uma arquitetura de dois contextos (visualização e estados). Sou lider técnico da equipe trabalhando na definição das diretrizes da aplicação de frontend, fazendo o treinamento técnico e auxiliando na contração de novos integrantes.
            </p>

            <p>
              Atualmente, no seu tempo livre, busco conteúdos relacionado ao ecossistema javascript, design de algoritmos e design UI/UX. Além disso, busca sempre ler livros relacionados à história do mundo para conhecer um pouco mais sobre o passado da humanidade.
            </p>
          </Box>

          <Box pt={16} pr={32} pb={16} pl={32} width={1}><hr/></Box>
        </Flex>


        <Flex flexWrap="wrap">
          {this.props.articles.map(article => (
            <Box p={16} pt={10} pb={10} width={1} key={article.createdAt}>
              <Article href={article.link}>
                <h2>
                  {article.title}
                  <small>{(new Date(article.createdAt).toLocaleDateString('pt-BR'))}</small>
                </h2>
                <div>{article.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <p>{article.content}</p>
              </Article>
            </Box>
          ))}
        </Flex>
      </Layout>
    )
  }
}

Index.getInitialProps = async function() {
  const url = process.env.NODE_ENV === "production"
    ? "https://rafaelmariano.me/medium"
    : "http://localhost:3000/medium"

  const response = await fetch(url)
  const articles = await response.json()

  return { articles }
}

export default Index
