import styled from "styled-components"

const Col = styled.div`
  padding-left: 18px;
  padding-right: 18px;
  flex: ${props => props.md};
`

Col.displayName = "Col"

export default Col
