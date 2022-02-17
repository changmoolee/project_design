import React from "react";
import styled from "styled-components";
import { FeatureContainer } from "../layout/layout";
import { Feature } from "../layout/layout";
import { Manual } from "../layout/layout";
import BasicDropDown from "./BasicDropDown";
import HoverDropDown from "./HoverDropDown";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SubContainer = styled.section`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const DropDowns = styled.section`
  display: flex;
`;

const DropDownDemo = () => {
  const items1 = ["item1", "item2", "item3", "item4", "item5"];
  const items2 = ["item6", "item7", "item8", "item9", "item10"];
  /* You can change the item database by changing this "items" Array. */

  const title = "Sth...";
  /* You can change the title of button by changing the props title */

  return (
    <FeatureContainer>
      <Feature>
        <Container>
          <SubContainer>
            <DropDowns>
              <BasicDropDown items={items1} title="item1" />
              <BasicDropDown items={items2} title="item2" />
            </DropDowns>
          </SubContainer>
          <SubContainer>
            <DropDowns>
              <HoverDropDown items={items1} title="item1" />
              <HoverDropDown items={items2} title="item2" />
            </DropDowns>
          </SubContainer>
        </Container>
      </Feature>
      <Manual></Manual>
    </FeatureContainer>
  );
};

export default DropDownDemo;
