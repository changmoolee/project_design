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
  width: ${(props) => props.size.width}px;
  height: ${(props) => props.size.height}px;
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
  background: ${(props) =>
    props.checked === props.index
      ? props.color.checkedColor
      : props.color.basicColor};
  border: black 1px solid;
`;

export const MultipleButton = styled.span`
  width: ${(props) => (props.mode === "horizontal" ? "max-content" : "100%")};
  height: ${(props) => (props.mode === "horizontal" ? "100%" : "content")};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.checked[props.index]
      ? props.color.checkedColor
      : props.color.basicColor};
  border: black 1px solid;
`;

export const Img = styled.img`
  width: 90%;
  height: 90%;
  object-fit: contain;
`;

const ToggleButtonsDemo = () => {
  const buttons = ["align-left.png", "align-center.png", "align-right.png"];
  /* If you want to change the images in the ToggleButtons,
   1. Add image files that you want at the "image/public" folder.
   2. Change the name of elements to image file name in the buttons Array */

  const mode = "horizontal" || "vertical";
  /* As you change the "mode" props in a tag, 
    You can choose layout of the ToggleButtons. */

  const color = { basicColor: "#90caf9", checkedColor: "#4c7290" };
  /* You can change the color of button whether checked or not */

  const horizontalSize = { width: 180, height: 45 };
  const verticalSize = { width: 36, height: 180 };
  /* If you want to change the size of ToggleButtons, 
    change the figures of width and height. (based on "px" figure) */

  return (
    <FeatureContainer>
      <Feature>
        <Container>
          <HorizontalExclusive
            buttons={buttons}
            size={horizontalSize}
            color={color}
            mode="horizontal"
          />
          <HorizontalMultiple
            buttons={buttons}
            size={horizontalSize}
            color={color}
            mode="horizontal"
          />
        </Container>
        <Container>
          <VerticalExclusive
            buttons={buttons}
            size={verticalSize}
            color={color}
            mode="vertical"
          />
          <VerticalMultiple
            buttons={buttons}
            size={verticalSize}
            color={color}
            mode="vertical"
          />
        </Container>
      </Feature>
    </FeatureContainer>
  );
};

export default ToggleButtonsDemo;
