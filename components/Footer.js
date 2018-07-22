import styled from "styled-components"

const Footer = styled.div`
  margin-top: 32px;
  padding: 32px;
  border-top: 1px solid #AFAFAF;
  text-align: center;
`

export default () => (
  <Footer>
    <div className="row justify-content-md-center">
      <div className="content col-lg-12">
        &copy; 2017
        Rafael Mariano de Castro Silva
        <br/><br />

        <a href="mailto:toruticas@gmail.com">
          <span className="icon icon--github">
            <img src="/static/images/icon-email.svg" />
          </span>
        </a>

        <a href="https://www.github.com/toruticas">
          <span className="icon icon--github">
            <img src="/static/images/icon-github.svg" />
          </span>
        </a>

        <a href="https://www.linkedin.com/in/toruticas">
          <span className="icon icon--github">
            <img src="/static/images/icon-linkedin.svg" />
          </span>
        </a>

        <a href="https://medium.com/feed/@toruticas">
          <span className="icon icon--github">
            <img src="/static/images/icon-rss.svg" />
          </span>
        </a>
      </div>
    </div>
  </Footer>
)
