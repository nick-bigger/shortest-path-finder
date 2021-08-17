import React from "react"
import styled from "@emotion/styled";


const ControlMenuContainer = styled.div`
  margin: 10px 10px 30px 10px;
  border: 1px solid #ddd;
  padding: 20px;
  flex-grow: 1;
  width: 90%;

  @media (min-width: 1200px) {
    width: 60%;
  }
`;

export default function ControlMenu ({ children }) {
    return(
      <ControlMenuContainer>{children}</ControlMenuContainer>
    )
}
