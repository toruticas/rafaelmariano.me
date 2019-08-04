import { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components"
import { ifNotProp } from "styled-tools"

const INTRO_MESSAGES = [
  "Frontend na @arquivei",
  "Bruto, rústico e sistemático",
  "Eu faço internet",
  "Fofurizador de interfaces",
  "Síndico do Brasil",
  "Terraplanista",
]

const typing = keyframes`
  from, to { border-right: 2px solid transparent; }
  50% { border-right: 2px solid black; }
`

const Paragraph = styled.p`
  height: 18px;
`

const TypeWriterPipe = styled.span`
  border-right: 2px solid black;
  height: 18px;
  margin-left: 1px;
  ${ifNotProp('typing', css`
    animation: ${typing} 1.2s linear infinite;
  `)}
`

class TypeWriter extends React.Component {
  state = {
    typed: "",
    currentMessage: 0,
    currentPosition: INTRO_MESSAGES[0].length,
    rewinding: false,
    typing: false,
  }

  timeout = null

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
    const message = INTRO_MESSAGES[this.state.currentMessage]
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
          if (this.state.currentMessage + 1 < INTRO_MESSAGES.length) {
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
      <Paragraph>
        {INTRO_MESSAGES[this.state.currentMessage].slice(0, this.state.currentPosition)}
        <TypeWriterPipe typing={this.state.typing} />
      </Paragraph>
    )
  }
}

export default TypeWriter;