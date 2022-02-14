import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dcdcdc;
`;
const Title = styled.div`
  width: 450px;
  height: 50px;
  display: flex;
  justify-content: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 24px;
`;
const Description = styled.div`
  width: 450px;
  height: 200px;
  display: flex;
  justify-content: flex;
  font-size: 16px;
`;

const TabDescription = ({ tabTitle, tabDescription, tabIndex }) => {
  return (
    <Container>
      <Title>{tabTitle[tabIndex]}</Title>
      <Description>{tabDescription[tabIndex]}</Description>
    </Container>
  );
};

export default TabDescription;
