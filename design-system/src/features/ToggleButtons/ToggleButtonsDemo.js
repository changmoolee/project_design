import React from "react";
import styled from "styled-components";
import { FeatureContainer } from "../layout/layout";
import { Feature } from "../layout/layout";
import HorizontalExclusive from "./Horizontal/HorizontalExclusive";
import HorizontalMultiple from "./Horizontal/HorizontalMultiple";
import VerticalExclusive from "./Vertical/VerticalExclusive";
import VerticalMultiple from "./Vertical/VerticalMultiple";

const Container = styled.section`
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: black 1px solid;
`;

export const Buttons = styled.section`
  width: ${(props) => props.length.width};
  height: ${(props) => props.length.height};
  display: flex;
  flex-direction: ${(props) =>
    props.mode === "horizontal" ? "row" : "column"};
  justify-content: flex-start;
  align-items: center;
  border: black 1px solid;
  border-radius: 10px;
  overflow: hidden;
`;

export const ExclusiveButton = styled.span`
  width: ${(props) => (props.mode === "horizontal" ? "max-content" : "100%")};
  height: ${(props) => (props.mode === "horizontal" ? "100%" : "content")};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.checked === props.index ? "gray" : "none")};
  border: black 1px solid;
`;

export const MultipleButton = styled.span`
  width: ${(props) => (props.mode === "horizontal" ? "max-content" : "100%")};
  height: ${(props) => (props.mode === "horizontal" ? "100%" : "content")};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.checked[props.index] ? "gray" : "none")};
  border: black 1px solid;
`;

const ToggleButtonsDemo = () => {
  const buttons = ["align-left", "align-center", "align-right"];
  /* If you want to change the images in the ToggleButtons,
   1. Add image filtes that you want at the "image/public" folder.
   2. Change the name of elements to image file name in the buttons Array */

  const mode = "horizontal" || "vertical";
  /* As you change the "mode" props in a tag, 
    You can choose layout of the ToggleButtons. */

  const horizontalLength = { width: "200px", height: "50px" };
  const verticalLength = { width: "40px", height: "200px" };
  /* If you want to change the length of ToggleButtons, 
    change the figures of width and height. */

  return (
    <FeatureContainer>
      <Feature>
        <Container>
          <HorizontalExclusive
            buttons={buttons}
            horizontalLength={horizontalLength}
            mode="horizontal"
          />
          <HorizontalMultiple
            buttons={buttons}
            horizontalLength={horizontalLength}
            mode="horizontal"
          />
        </Container>
        <Container>
          <VerticalExclusive
            buttons={buttons}
            verticalLength={verticalLength}
            mode="vertical"
          />
          <VerticalMultiple
            buttons={buttons}
            verticalLength={verticalLength}
            mode="vertical"
          />
        </Container>
      </Feature>
    </FeatureContainer>
  );
};

export default ToggleButtonsDemo;
