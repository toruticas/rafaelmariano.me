import styled from "styled-components"

const Container = styled.div`
  ${'' /* Extra large devices (large laptops and desktops, 1200px and up) */}
  @media only screen and (min-width: 1024px) {
    width: 1024px;
    margin-left: -512px;
    left: 50%;
    position: relative;
  }

`
// /* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {
//   background: red;
// }
//
// /* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {
//   background: green;
// }
//
// /* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 600px) {
//   background: blue;
// }
//
// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 768px) {
//   background: orange;
// }
//

Container.displayName = "Container"

export default Container
