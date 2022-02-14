import React from "react";
import { FeatureContainer } from "../layout/layout";
import { Feature } from "../layout/layout";
import Toggle from "./Toggle";

const ToggleDemo = () => {
  return (
    <FeatureContainer>
      <Feature>
        <Toggle />
      </Feature>
    </FeatureContainer>
  );
};

export default ToggleDemo;
