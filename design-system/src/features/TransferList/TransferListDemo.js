import React, { useState } from "react";
import styled from "styled-components";
import { FeatureContainer } from "../layout/layout";
import { Feature } from "../layout/layout";
import { Manual } from "../layout/layout";
import TransferList from "./TransferList";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

const TransferListDemo = () => {
  const [leftItems, setLeftItems] = useState([
    "List Item1",
    "List Item2",
    "List Item3",
    "List Item4",
    "List Item5",
  ]);
  /* You can handle the left database by changing the array.*/

  const [rightItems, setRightItems] = useState([
    "List Item6",
    "List Item7",
    "List Item8",
    "List Item9",
    "List Item10",
  ]);
  /* You can handle the right database by changing the array.*/

  return (
    <FeatureContainer>
      <Feature>
        <Container>
          <TransferList
            leftItems={leftItems}
            rightItems={rightItems}
            setLeftItems={setLeftItems}
            setRightItems={setRightItems}
          />
        </Container>
      </Feature>
      <Manual></Manual>
    </FeatureContainer>
  );
};

export default TransferListDemo;
