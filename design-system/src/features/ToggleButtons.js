import React from "react";
import styled from "styled-components";
import { FeatureContainer } from "./layout/layout";
import { Feature } from "./layout/layout";
import Exclusive from "./ToggleButtons/Exclusive";
import Multiple from "./ToggleButtons/Multiple";

const Container = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: black 1px solid;
`;
const ToggleButtonGroup = styled.section`
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: black 1px solid;
`;

const ToggleButtons = () => {
  return (
    <FeatureContainer>
      <Feature>
        <Container>
          <ToggleButtonGroup>
            <Exclusive />
          </ToggleButtonGroup>
          <ToggleButtonGroup>
            <Multiple />
          </ToggleButtonGroup>
        </Container>
      </Feature>
    </FeatureContainer>
  );
};

export default ToggleButtons;
