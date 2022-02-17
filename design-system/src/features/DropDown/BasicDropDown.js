import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100px;
  height: 50px;
`;

const Button = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  :hover {
    background: gray;
  }
`;

const Menu = styled.div`
  width: 200px;
  display: ${({ clicked }) => (clicked ? "block" : "none")};
  border: 1px solid black;
`;

const Item = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background: white;
  :hover {
    background: gray;
  }
  z-index: 1;
`;

const BasicDropDown = ({ items, title }) => {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(!clicked);
  };
  return (
    <Container>
      <Button onClick={handleButtonClick}>{title}</Button>
      <Menu clicked={clicked}>
        {items.map((item) => (
          <Item>{item}</Item>
        ))}
      </Menu>
    </Container>
  );
};

export default BasicDropDown;
