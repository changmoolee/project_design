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

const Right = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: ${({ drawerLength }) => drawerLength}px;
  height: 100%;
  background: white;
  transform: ${({ right, drawerLength }) =>
    right
      ? `translate(${window.innerWidth - drawerLength}px, 0)`
      : `translate(${window.innerWidth}px, 0)`};
  transition: 0.3s;
`;

const RightDrawer = ({ items, drawerLength }) => {
  const [wrapper, setWrapper] = useState(false);
  const [right, setRight] = useState(false);

  const clickedRight = () => {
    setRight(true);
    setWrapper(true);
  };

  const blurDrawer = () => {
    setRight(false);

    setWrapper(false);
  };
  return (
    <>
      <Wrapper wrapper={wrapper} onClick={blurDrawer} />
      <Right right={right} drawerLength={drawerLength}>
        <Drawer>
          <Items>
            {items.map((item) => (
              <Item>{item}</Item>
            ))}
          </Items>
        </Drawer>
      </Right>
      <Button onClick={clickedRight}>Right</Button>
    </>
  );
};

export default RightDrawer;
