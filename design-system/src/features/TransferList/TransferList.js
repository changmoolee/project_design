import React, { useState } from "react";
import styled from "styled-components";

const SubContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const List = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: auto;
`;
const Transfer = styled.div`
  width: 100px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;
const Item = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 24px;
  :hover {
    background: gray;
    color: white;
  }
`;
const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin: 0 20px;
`;
const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 10px;
  :hover {
    background: gray;
  }
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

const TransferList = ({
  leftItems,
  rightItems,
  setLeftItems,
  setRightItems,
}) => {
  const [leftChecked, setLeftChecked] = useState(
    Array(leftItems.length).fill(false)
  );
  const [rightChecked, setRightChecked] = useState(
    Array(rightItems.length).fill(false)
  );

  const handleLeftCheck = (index) => {
    let leftCheckedCopy = [...leftChecked];
    leftCheckedCopy[index] = !leftCheckedCopy[index];
    setLeftChecked(leftCheckedCopy);
  };

  const handleRightCheck = (index) => {
    let rightCheckedCopy = [...rightChecked];
    rightCheckedCopy[index] = !rightCheckedCopy[index];
    setRightChecked(rightCheckedCopy);
  };

  const onChangeLeft = (event, index) => {
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
  const onChangeRight = (event, index) => {
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

  return (
    <>
      <SubContainer>
        <List>
          {leftItems.map((item, index) => (
            <Item onClick={() => handleLeftCheck(index)}>
              <CheckBox
                type="checkbox"
                checked={leftChecked[index]}
                onChange={(event) => onChangeLeft(event, index)}
              />
              {item}
            </Item>
          ))}
        </List>
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
            <Item onClick={() => handleRightCheck(index)}>
              <CheckBox
                type="checkbox"
                checked={rightChecked[index]}
                onChange={(event) => onChangeRight(event, index)}
              />
              {item}
            </Item>
          ))}
        </List>
      </SubContainer>
    </>
  );
};

export default TransferList;
