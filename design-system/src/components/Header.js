import React from "react";
import styled from "styled-components";

const Container = styled.header`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: black solid 1px;
`;

const Header = () => {
  return <Container>Header</Container>;
};

export default Header;
