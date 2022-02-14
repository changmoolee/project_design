import React from "react";
import styled from "styled-components";
import { FeatureContainer } from "../layout/layout";
import { Feature } from "../layout/layout";
import HorizontalExclusive from "./Horizontal/HorizontalExclusive";
import HorizontalMultiple from "./Horizontal/HorizontalMultiple";
import VerticalExclusive from "./Vertical/VerticalExclusive";
import VerticalMultiple from "./Vertical/VerticalMultiple";

const HorizontalContainer = styled.section`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: black 1px solid;
`;

const VerticalContainer = styled.section`
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: black 1px solid;
`;
const ToggleButtonsDemo = () => {
  const buttons = ["align-left", "align-center", "align-right"];
  /* If you want to change the images in the ToggleButtons,
   1. Add image filtes that you want at the "image/public" folder.
   2. Change the name of elements to image file name in the buttons Array */

  const HorizontalLength = { width: "200px", height: "50px" };
  const VerticalLength = { width: "40px", height: "200px" };
  /* If you want to change the images in the ToggleButtons, 
    change the number of width and height */
  return (
    <FeatureContainer>
      <Feature>
        <HorizontalContainer>
          <HorizontalExclusive
            buttons={buttons}
            HorizontalLength={HorizontalLength}
          />
          <HorizontalMultiple
            buttons={buttons}
            HorizontalLength={HorizontalLength}
          />
        </HorizontalContainer>
        <VerticalContainer>
          <VerticalExclusive
            buttons={buttons}
            VerticalLength={VerticalLength}
          />
          <VerticalMultiple buttons={buttons} VerticalLength={VerticalLength} />
        </VerticalContainer>
      </Feature>
    </FeatureContainer>
  );
};

export default ToggleButtonsDemo;
