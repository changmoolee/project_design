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

const Bottom = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: ${({ drawerLength }) => drawerLength}px;
  background: white;
  transform: ${({ bottom, drawerLength }) =>
    bottom
      ? `translate(0 ,${window.innerHeight - drawerLength}px)`
      : `translate(0 ,${window.innerHeight}px)`};
  transition: 0.3s;
`;

const BottomDrawer = ({ items, drawerLength }) => {
  const [wrapper, setWrapper] = useState(false);
  const [bottom, setBottom] = useState(false);

  const clickedBottom = () => {
    setBottom(true);
    setWrapper(true);
  };

  const blurDrawer = () => {
    setBottom(false);
    setWrapper(false);
  };
  return (
    <>
      <Wrapper wrapper={wrapper} onClick={blurDrawer} />
      <Bottom bottom={bottom} drawerLength={drawerLength}>
        <Drawer>
          <Items>
            {items.map((item) => (
              <Item>{item}</Item>
            ))}
          </Items>
        </Drawer>
      </Bottom>
      <Button onClick={clickedBottom}>Bottom</Button>
    </>
  );
};

export default BottomDrawer;
