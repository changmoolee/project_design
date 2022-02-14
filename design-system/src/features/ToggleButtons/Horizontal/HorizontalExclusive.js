import React, { useState } from "react";
import styled from "styled-components";
import { Buttons } from "../ToggleButtonsDemo";
import { ExclusiveButton } from "../ToggleButtonsDemo";

const Img = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
`;

const HorizontalExclusive = ({ buttons, horizontalLength, mode }) => {
  const [checked, setChecked] = useState(0);

  const handleChecked = (index) => {
    setChecked(index);
  };

  return (
    <Buttons length={horizontalLength} mode={mode}>
      {buttons.map((button, index) => (
        <ExclusiveButton
          onClick={() => handleChecked(index)}
          index={index}
          checked={checked}
          mode={mode}
        >
          <Img src={`./image/${button}.png`} draggable={false} />
        </ExclusiveButton>
      ))}
    </Buttons>
  );
};

export default HorizontalExclusive;
