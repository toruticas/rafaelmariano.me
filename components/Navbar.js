import styled from "styled-components"
import Link from 'next/link'

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  ${'' /* border-bottom: 1px solid #EFEFEF; */}
  margin-bottom: 32px;
  padding-top: 18px;
  padding-bottom: 18px;

  a[data-brand="true"] {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    padding: 0 40px 0 40px;

    img {
      margin-top: 10px;
      height: 30px;
      width: 30px;
    }

    span {
      position: absolute;
      margin-left: 10px;
    }
  }

  ul {
    position: absolute;
    top: 16px;
    right: 0;

    li {
      display: inline;
      margin-right: 40px;
    }
  }
`

export default () => (
  <Nav>
    <Link href="/">
      <a data-brand="true">
        <img src="/static/images/logo-blue.png" />
        <span>Rafael Mariano</span>
      </a>
    </Link>

    <ul>
      <li>
        <a href="https://medium.com/@toruticas">
          Blog
        </a>
      </li>
      <li>
        <Link href="/experience">
          <a>
            Experiência
          </a>
        </Link>
      </li>
    </ul>
  </Nav>
)
