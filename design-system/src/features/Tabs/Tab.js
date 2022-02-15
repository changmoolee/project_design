import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: ${(props) => props.tapSize.width}px;
  height: ${(props) => props.tapSize.height}px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const TabButton = styled.div`
  height: 100%;
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  color: ${(props) =>
    props.index === props.tabIndex
      ? props.checkedTabColor.textColor
      : props.tabColor.textColo};
  background-color: ${(props) =>
    props.index === props.tabIndex
      ? props.checkedTabColor.backgroundColor
      : props.tabColor.backgroundColor};
  transition: 0.3s;
  cursor: pointer;
`;

const Tab = ({
  tabs,
  tabIndex,
  tapSize,
  tabColor,
  checkedTabColor,
  handleTab,
}) => {
  return (
    <Container tapSize={tapSize}>
      {tabs.map((tab, index) => {
        return (
          <TabButton
            key={index}
            tabIndex={tabIndex}
            index={index}
            onClick={() => handleTab(index)}
            tabColor={tabColor}
            checkedTabColor={checkedTabColor}
          >
            {tab}
          </TabButton>
        );
      })}
    </Container>
  );
};

export default Tab;
