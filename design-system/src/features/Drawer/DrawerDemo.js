import React from "react";
import styled from "styled-components";
import { FeatureContainer } from "../layout/layout";
import { Feature } from "../layout/layout";
import { Manual } from "../layout/layout";
import TopDrawer from "./Drawers/TopDrawer";
import RightDrawer from "./Drawers/RightDrawer";
import BottomDrawer from "./Drawers/BottomDrawer";
import LeftDrawer from "./Drawers/LeftDrawer";

const Drawers = styled.section`
  display: flex;
`;

export const Drawer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Items = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export const Item = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  :hover {
    color: white;
    background: gray;
  }
`;

const DrawerDemo = () => {
  const items = ["item1", "item2", "item3", "item4", "item5"];
  /* You can change items of the drawer by changing array items. */

  const drawerLength = 300;
  /* You can alter the length of drawer by changing drawerLength variable. */

  return (
    <>
      <FeatureContainer>
        <Feature>
          <Drawers>
            <TopDrawer items={items} drawerLength={drawerLength} />
            <RightDrawer items={items} drawerLength={drawerLength} />
            <BottomDrawer items={items} drawerLength={drawerLength} />
            <LeftDrawer items={items} drawerLength={drawerLength} />
          </Drawers>
        </Feature>
        <Manual></Manual>
      </FeatureContainer>
    </>
  );
};

export default DrawerDemo;
