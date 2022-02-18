import React, { useState } from "react";
import styled from "styled-components";
import { Drawer } from "../DrawerDemo";
import { Items } from "../DrawerDemo";
import { Item } from "../DrawerDemo";

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

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: ${({ wrapper }) => (wrapper ? "flex" : "none")};
  background: rgba(0, 0, 0, 0.3);
`;

const Left = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: ${({ drawerLength }) => drawerLength}px;
  height: 100%;
  background: white;
  transform: ${({ left, drawerLength }) =>
    left ? "translate(0,0)" : `translate(-${drawerLength}px,0)`};
  transition: 0.3s;
`;

const LeftDrawer = ({ items, drawerLength }) => {
  const [wrapper, setWrapper] = useState(false);
  const [left, setLeft] = useState(false);

  const clickedLeft = () => {
    setLeft(true);
    setWrapper(true);
  };

  const blurDrawer = () => {
    setLeft(false);
    setWrapper(false);
  };
  return (
    <>
      <Wrapper wrapper={wrapper} onClick={blurDrawer} />
      <Left left={left} drawerLength={drawerLength}>
        <Drawer>
          <Items>
            {items.map((item) => (
              <Item>{item}</Item>
            ))}
          </Items>
        </Drawer>
      </Left>
      <Button onClick={clickedLeft}>Left</Button>
    </>
  );
};

export default LeftDrawer;
