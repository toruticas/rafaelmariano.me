import React from "react"
import styled, { keyframes } from "styled-components"
import fetch from "isomorphic-unfetch"

import Layout from "../components/Layout"
import Rating from "../components/Rating"

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
  text-decoration: none;
  color: black;

  :visited{
    color: black;
  }

  :hover {
    color: #979797;
  }

  h2 {
    margin-top: 32px;
    margin-bottom: 0;

    small {
      font-size: 14px;
    }
  }

  div {
    margin-top: 5px;
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

  componentDidMount() {
    this.setState({ currentMessage: 0, currentPosition: this.intro[0].length })

    if (process.env.NODE_ENV === "production") {
      setTimeout(() => {
        this.typeAction()
      }, 1000);
    }
  }

  typeAction = () => {
    const message = this.intro[this.state.currentMessage]
   this.setState({ typing: true })

    if (this.state.rewinding) {
      console.log("rewinding", this.state.currentMessage, this.state.currentPosition);
      if (this.state.currentPosition > 0) {
        setTimeout(() => {
          this.setState({ currentPosition: this.state.currentPosition - 1 })
          this.typeAction()
        }, 30)
      } else {
        this.setState({ typing: false })

        setTimeout(() => {
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
      console.log("foward", this.state.currentMessage, this.state.currentPosition);
      this.setState({ currentPosition: this.state.currentPosition + 1 })

      setTimeout(() => {
        this.typeAction()
      }, Math.random() * (70 - 30) + 30)
    } else {
      console.log("waiting", this.state.currentMessage, this.state.currentPosition);
      this.setState({ typing: false })
      setTimeout(() => {
        this.setState({ rewinding: true })
        this.typeAction()
      }, 4000)
    }
  }

  render() {
    return (
      <Layout>
        <Row>
          <Col md={1}>
            <Image src="/static/images/me.jpg" data-rounded/>
            <TypeWriter>
              {this.intro[this.state.currentMessage].slice(0, this.state.currentPosition)}
              <TypeWriterPipe typing={this.state.typing} />
            </TypeWriter>
          </Col>

          <Col md={2}>
            <Title>SOBRE MIM</Title>

            <p>Olá, eu sou o Olinda. Sou apaixonado por computação, música e história. Atualmente trabalho como <strong>Frontend Developer</strong> na <a href="https://arquivei.com.br">Arquivei</a>, uma startup residente na cidade São Carlos - São Paulo.</p>

            <p>A minha história na computação começou bem cedo criando os meus primeiros códigos com 10 anos de idade digitando algorítmos prontos em G-BASIC no meu <a href="http://retrogamernes.blogspot.com.br/2014/01/magic-computer-pc95-dynacom-videogames.html">Magic Computer PC95</a>. Aos 15 escrevi meus primeiros códigos em HTML com auxílio do <a href="https://pt.wikipedia.org/wiki/Microsoft_FrontPage">Microsoft Front Page</a> criando sites com conteúdos relacionado a games, sobretudo o Counter-Strike, e sobre a história do Egito antigo.</p>

            <p>Atualmente, no seu tempo livre, busco conteúdos relacionado ao ecossistema Javascript das mais diversas fontes criando POCs para entender os conceitos estudados na prática. Além disso, busca sempre ler livros relacionados à história do mundo para conhecer um pouco sobre o passado e entender o presente.</p>
          </Col>
        </Row>

        <hr />

        <Col md={1}>
          {this.props.articles.map(article => (
            <Article href={article.link} key={article.createdAt}>
              <h2>{article.title} <small>{article.createdAt}</small></h2>
              <div>{article.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <p>{article.content}</p>
            </Article>
          ))}
        </Col>
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
