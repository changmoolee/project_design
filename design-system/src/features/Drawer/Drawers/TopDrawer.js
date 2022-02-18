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

const Top = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${({ drawerLength }) => drawerLength}px;
  background: white;
  transform: ${({ top, drawerLength }) =>
    top ? "translate(0,0)" : `translate(0,-${drawerLength}px)`};
  transition: 0.3s;
`;

const TopDrawer = ({ items, drawerLength }) => {
  const [wrapper, setWrapper] = useState(false);
  const [top, setTop] = useState(false);
  const blurDrawer = () => {
    setTop(false);
    setWrapper(false);
  };
  const clickedTop = () => {
    setTop(true);
    setWrapper(true);
  };
  return (
    <>
      <Wrapper wrapper={wrapper} onClick={blurDrawer} />
      <Top top={top} drawerLength={drawerLength}>
        <Drawer>
          <Items>
            {items.map((item) => (
              <Item>{item}</Item>
            ))}
          </Items>
        </Drawer>
      </Top>
      <Button onClick={clickedTop}>Top</Button>
    </>
  );
};

export default TopDrawer;
