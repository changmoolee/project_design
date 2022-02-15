import React from "react";
import styled from "styled-components";
import { FeatureContainer } from "../layout/layout";
import { Feature } from "../layout/layout";
import FilledToggle from "./FilledToggle";
import BasicToggle from "./BasicToggle";
import SquareToggle from "./SquareToggle";

const Toggles = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ToggleDemo = () => {
  let controlMode = "none";

  /* If you want to make the "disabled Toggle", 
  please change the variable => controlMode = "disabled" */

  /* If you want to make the "default checked Toggle", 
   please change the variable => controlMode = "defaultChecked" */

  return (
    <FeatureContainer>
      <Feature>
        <Toggles>
          <BasicToggle controlMode={controlMode} />
          <SquareToggle controlMode={controlMode} />
          <FilledToggle controlMode={controlMode} />
        </Toggles>
      </Feature>
    </FeatureContainer>
  );
};

export default ToggleDemo;
