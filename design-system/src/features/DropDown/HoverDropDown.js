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
  display: ${({ enter }) => (enter ? "block" : "none")};
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

const HoverDropDown = ({ items, title }) => {
  const [enter, setEnter] = useState(false);
  const handleMouseEnter = () => {
    setEnter(true);
  };
  const handleMouseLeave = () => {
    setEnter(false);
  };

  return (
    <Container>
      <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {title}
      </Button>
      <Menu enter={enter}>
        {items.map((item) => (
          <Item>{item}</Item>
        ))}
      </Menu>
    </Container>
  );
};

export default HoverDropDown;
