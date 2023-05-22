import React from "react";
import styled from "styled-components";

const ExampleStyledDiv = styled.div`
  font-size: 1.5rem;
  color: #333;
  span {
    font-weight: 900;
  }
`;

export default function App() {
  return (
    <div>
      <ExampleStyledDiv>
        <span>Hello</span> world!
      </ExampleStyledDiv>
    </div>
  );
}
