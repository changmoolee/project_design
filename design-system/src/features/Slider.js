import React from "react";
import { FeatureContainer } from "./layout/layout";
import { Feature } from "./layout/layout";
import Horizontal from "./Slider/Horizontal";
import Vertical from "./Slider/Vertical";

const Slider = () => {
  return (
    <FeatureContainer>
      <Feature>
        <Horizontal min="5" max="100" step="5" />
        <Vertical min="5" max="100" step="5" />
      </Feature>
    </FeatureContainer>
  );
};

export default Slider;
