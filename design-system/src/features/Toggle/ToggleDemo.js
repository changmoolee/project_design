import React from "react";
import styled from "styled-components";
import { FeatureContainer } from "../layout/layout";
import { Feature } from "../layout/layout";
import FilledToggle from "./FilledToggle";
import BasicToggle from "./BasicToggle";
import SquareToggle from "./SquareToggle";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const Toggles = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleDemo = () => {
  let controlMode = "none" || "disabled" || "defaultChecked";
  /* If you want to make the disabled Toggle, 
  please change the variable => controlMode = "disabled" */

  /* If you want to make the default checked Toggle, 
   please change the variable => controlMode = "defaultChecked" */

  const basicSize = { width: 50, height: 20, ballSize: 30 };
  const squareSize = { width: 60, height: 25, ballSize: 30 };
  const filledSize = { width: 80, height: 40, ballSize: 35 };
  /* You can alter Toggle size by size variable. (based on "px" figure) */

  const color = {
    checked: { ball: "#90caf9", shadow: "#4d7291" },
    unChecked: { ball: "#e0e0e0", shadow: "#3b4754" },
    disabledColor: { ball: "#757575", shadow: "#3b4754" },
    defaultCheckedColor: { ball: "#405a70", shadow: "#253d53" },
  };

  /* You can change the color of Toggle elements */

  return (
    <FeatureContainer>
      <Feature>
        <Container>
          <Toggles>
            <BasicToggle color={color} controlMode="none" size={basicSize} />
          </Toggles>
          <Toggles>
            <SquareToggle color={color} controlMode="none" size={squareSize} />
          </Toggles>
          <Toggles>
            <FilledToggle color={color} controlMode="none" size={filledSize} />
          </Toggles>
          <Toggles>
            <BasicToggle
              color={color}
              controlMode="disabled"
              size={basicSize}
            />
          </Toggles>
          <Toggles>
            <SquareToggle
              color={color}
              controlMode="disabled"
              size={squareSize}
            />
          </Toggles>
          <Toggles>
            <FilledToggle
              color={color}
              controlMode="disabled"
              size={filledSize}
            />
          </Toggles>
          <Toggles>
            <BasicToggle
              color={color}
              controlMode="defaultChecked"
              size={basicSize}
            />
          </Toggles>
          <Toggles>
            <SquareToggle
              color={color}
              controlMode="defaultChecked"
              size={squareSize}
            />
          </Toggles>
          <Toggles>
            <FilledToggle
              color={color}
              controlMode="defaultChecked"
              size={filledSize}
            />
          </Toggles>
        </Container>
      </Feature>
    </FeatureContainer>
  );
};

export default ToggleDemo;
