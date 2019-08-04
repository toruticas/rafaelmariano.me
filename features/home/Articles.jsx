import styled from "styled-components"
import { Flex, Box } from 'grid-styled'

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

const Articles = ({ articles }) => (
  <Flex flexWrap="wrap">
    {articles.map(article => (
      <Box p={16} pt={10} pb={10} width={1} key={article.createdAt}>
        <Article href={article.link}>
          <h2>
            {article.title}
            <small>{(new Date(article.createdAt).toLocaleDateString('pt-BR'))}</small>
          </h2>
          <div>{article.tags && article.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <p>{article.content}</p>
        </Article>
      </Box>
    ))}
  </Flex>
)

export default Articles;