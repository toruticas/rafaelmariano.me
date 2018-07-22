import React from "react"
import styled, { injectGlobal } from "styled-components"

import Layout from "../components/Layout"
import Rating from "../components/Rating"

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

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <h2>Habilidades</h2>

          {Object.keys(data.skills).map(value => (
            <div style={{ marginTop: 30 }}>
              <h3 style={{ marginLeft: "7%" }}>{value} ({data.skills[value].length})</h3>
              <div style={{ display: "flex", flexFlow: "row wrap"}}>
                {data.skills[value].map(item => (
                  <div key={value} style={{ width: "40%", marginLeft: "7%" }}>
                    <Rating name={item.name} note={item.value} key={item.name}/>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </Layout>
    )
  }
}

export default Index
