import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 500px;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 50px;
  background-color: #dcdcdc;
`;

const TabButton = styled.div`
  height: 100%;
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  color: ${(props) => (props.index === props.tabIndex ? "white" : "gray")};
  background-color: ${(props) =>
    props.index === props.tabIndex ? "#4a19cd" : "#dcdcdc"};
  transition: 0.3s;
  cursor: pointer;
`;

const Tab = ({ tabs, tabIndex, handleTab }) => {
  return (
    <Container>
      {tabs.map((tab, index) => {
        return (
          <TabButton
            key={index}
            tabIndex={tabIndex}
            index={index}
            onClick={() => handleTab(index)}
          >
            {tab}
          </TabButton>
        );
      })}
    </Container>
  );
};

export default Tab;
