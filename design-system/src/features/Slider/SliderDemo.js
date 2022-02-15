import React from "react";
import { FeatureContainer } from "../layout/layout";
import { Feature } from "../layout/layout";
import Vertical from "./Vertical";
import Horizontal from "./Horizontal";

const SliderDemo = () => {
  const figures = { min: "10", max: "100", step: "10" };
  /* You can alter the minimum figures, maximum figures and step figures. */

  // Horizontal
  const leftImage = "volume-down.png";
  const rightImage = "volume-up.png";

  // Vertical
  const bottomFalseImage = "mute.png";
  const bottomTrueImage = "volume-up.png";
  /* You can change the image next to the slider.
     If you don't want Image, give the "none" to the variable */

  const color = {
    thumbColor: "#ffffff",
    hoverThumbColor: "#324b60",
    trackColor: "#87ccff",
    hoverTrackColor: "#5d8db4",
  };
  /* You can change the color of the slider elements. */

  const sliderSize = { width: 250, height: 10 };
  const thumbSize = { width: 20, height: 30 };
  /* You can change the size of the slider elements. (based on "px" figure) */

  return (
    <FeatureContainer>
      <Feature>
        <Horizontal
          figures={figures}
          color={color}
          leftImage={leftImage}
          rightImage={rightImage}
          sliderSize={sliderSize}
          thumbSize={thumbSize}
        />
        <Vertical
          figures={figures}
          color={color}
          bottomFalseImage={bottomFalseImage}
          bottomTrueImage={bottomTrueImage}
          sliderSize={sliderSize}
          thumbSize={thumbSize}
        />
      </Feature>
    </FeatureContainer>
  );
};

export default SliderDemo;
