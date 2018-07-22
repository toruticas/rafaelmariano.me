import styled from "styled-components"

const Image = styled.img`
  width: 100%;
  height: auto;

  &[data-circle="true"] {
    border-radius: 50%;
  }

  &[data-rounded="true"] {
    border-radius: 9px;
  }
`

Image.displayName = "Image"

export default Image
