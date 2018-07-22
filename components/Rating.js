// http://csshexagon.com/
import styled from "styled-components"

const Hexagon = styled.div`
  position: relative;
  width: 14px;
  height: 8.08px;
  background-color: ${props => props.active ? "#64C7CC" : "#bde7e9"};
  margin: 4.04px 0;
  box-shadow: 0 0 4px rgba(0,0,0,0.6);
  ${'' /* top: 3px; */}
  margin-left: 10px;
  display: inline-block;

  &:before, &:after {
    content: "";
    position: absolute;
    z-index: 1;
    width: 9.90px;
    height: 9.90px;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background-color: inherit;
    left: 2.0503px;
    box-shadow: 0 0 4px rgba(0,0,0,0.6);
  }

  :before {
    top: -4.9497px;
  }

  :after {
    bottom: -4.9497px;
  }

  span {
    display: block;
    position: absolute;
    top:0px;
    left: 0;
    width:14px;
    height:8.0829px;
    z-index: 2;
    background: inherit;
  }
`

export default ({ name, note }) => (
  <div>
    {name}

    <span style={{ float: "right"}}>
      {[0,1,2,3,4,5,6,7,8,9].map((i) => (
        <Hexagon active={note > i} key={i}><span></span></Hexagon>
      ))}
    </span>
  </div>
)
