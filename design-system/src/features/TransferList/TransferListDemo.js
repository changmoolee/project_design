import React, { useState } from "react";
import styled from "styled-components";
import { FeatureContainer } from "../layout/layout";
import { Feature } from "../layout/layout";
import { Manual } from "../layout/layout";
import { Buttons } from "../ToggleButtons/ToggleButtonsDemo";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

const SubContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const List = styled.div`
  width: 200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  overflow-x: hidden;
  overflow-y: auto;
`;
const Transfer = styled.div`
  width: 200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
const Item = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid black;
`;
const CheckBox = styled.input``;
const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid black;
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border: 1px solid black;
`;
const Sort = styled.button`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TransferListDemo = () => {
  const [leftItems, setLeftItems] = useState([
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
  ]);
  // typescript - string[]

  // { id: number; value: string; }[]

  const [rightItems, setRightItems] = useState([
    "item6",
    "item7",
    "item8",
    "item9",
    "item10",
  ]);

  const [leftChecked, setLeftChecked] = useState(
    Array(leftItems.length).fill(false)
  );
  const [rightChecked, setRightChecked] = useState(
    Array(rightItems.length).fill(false)
  );

  const handleLeftCheck = (event, index) => {
    if (event.target.checked) {
      let leftCheckedCopy = [...leftChecked];
      leftCheckedCopy[index] = true;
      setLeftChecked([...leftCheckedCopy]);
    } else {
      let leftCheckedCopy = [...leftChecked];
      leftCheckedCopy[index] = false;
      setLeftChecked([...leftCheckedCopy]);
    }
    console.log({ leftChecked });
  };
  const handleRightCheck = (event, index) => {
    if (event.target.checked) {
      let rightCheckedCopy = [...rightChecked];
      rightCheckedCopy[index] = true;
      setRightChecked([...rightCheckedCopy]);
    } else {
      let rightCheckedCopy = [...rightChecked];
      rightCheckedCopy[index] = false;
      setRightChecked([...rightCheckedCopy]);
    }
    console.log({ rightChecked });
  };

  const moveItemLeft = () => {
    let leftItemsCopy = [...leftItems];
    let leftCheckedCopy = [...leftChecked].fill(false);

    for (let i = 0; i < rightChecked.length; i++) {
      if (rightChecked[i]) {
        leftItemsCopy.push(rightItems[i]);
        leftCheckedCopy.push(false);
      }
    }

    let rightItemsCopy = rightItems.filter((checked, i) => !rightChecked[i]);
    let rightCheckedCopy = rightChecked
      .filter((checked) => !checked)
      .fill(false);
    console.log({ rightCheckedCopy });

    setLeftItems([...leftItemsCopy]);
    setLeftChecked([...leftCheckedCopy]);
    setRightItems([...rightItemsCopy]);
    setRightChecked([...rightCheckedCopy]);
  };

  const moveItemRight = () => {
    let rightItemsCopy = [...rightItems];
    let rightCheckedCopy = rightChecked.fill(false);

    for (let i = 0; i < leftChecked.length; i++) {
      if (leftChecked[i]) {
        rightItemsCopy.push(leftItems[i]);
        rightCheckedCopy.push(false);
      }
    }

    let leftItemsCopy = leftItems.filter((checked, i) => !leftChecked[i]);
    let leftCheckedCopy = leftChecked.filter((checked) => !checked).fill(false);
    console.log({ leftCheckedCopy });

    setLeftItems([...leftItemsCopy]);
    setLeftChecked([...leftCheckedCopy]);
    setRightItems([...rightItemsCopy]);
    setRightChecked([...rightCheckedCopy]);
  };

  const moveAllLeft = () => {
    setLeftItems([...leftItems, ...rightItems]);
    setLeftChecked([...leftChecked, ...rightChecked]);
    setRightItems([]);
    setRightChecked([]);
  };

  const moveAllRight = () => {
    setRightItems([...leftItems, ...rightItems]);
    setRightChecked([...leftChecked, ...rightChecked]);
    setLeftItems([]);
    setLeftChecked([]);
  };

  const sortLeftItems = () => {
    let leftItemsCopy = [...leftItems];
    leftItemsCopy.sort();
    setLeftItems(leftItemsCopy);
  };

  const sortRightItems = () => {
    let rightItemsCopy = [...rightItems];
    rightItemsCopy.sort();
    setRightItems(rightItemsCopy);
  };

  return (
    <FeatureContainer>
      <Feature>
        <Container>
          <SubContainer>
            <List>
              {leftItems.map((item, index) => (
                <Item>
                  <CheckBox
                    type="checkbox"
                    checked={leftChecked[index]}
                    onChange={(event) => handleLeftCheck(event, index)}
                  />
                  {item}
                </Item>
              ))}
            </List>
            <Sort onClick={sortLeftItems}>Left Sort</Sort>
          </SubContainer>
          <Transfer>
            <IconContainer onClick={moveAllLeft}>
              <Icon src="./image/double-left-arrow.png" />
            </IconContainer>
            <IconContainer onClick={moveItemLeft}>
              <Icon src="./image/left-arrow.png" />
            </IconContainer>

            <IconContainer onClick={moveItemRight}>
              <Icon src="./image/right-arrow.png" />
            </IconContainer>
            <IconContainer onClick={moveAllRight}>
              <Icon src="./image/double-right-arrow.png" />
            </IconContainer>
          </Transfer>
          <SubContainer>
            <List>
              {rightItems.map((item, index) => (
                <Item>
                  <CheckBox
                    type="checkbox"
                    checked={rightChecked[index]}
                    onChange={(event) => handleRightCheck(event, index)}
                  />
                  {item}
                </Item>
              ))}
            </List>
            <Sort onClick={sortRightItems}>Right Sort</Sort>
          </SubContainer>
        </Container>
      </Feature>
      <Manual></Manual>
    </FeatureContainer>
  );
};

export default TransferListDemo;
