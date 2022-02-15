import React, { useState } from "react";
import styled from "styled-components";
import { Buttons } from "../ToggleButtonsDemo";
import { MultipleButton } from "../ToggleButtonsDemo";

const Img = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
`;

const HorizontalMultiple = ({ buttons, horizontalLength, mode }) => {
  const [checked, setChecked] = useState(Array(buttons.length).fill(false));

  const handleChecked = (index) => {
    let checkedCopy = [...checked];
    checkedCopy[index] = !checkedCopy[index];
    setChecked(checkedCopy);
  };

  return (
    <Buttons length={horizontalLength} mode={mode}>
      {buttons.map((button, index) => (
        <MultipleButton
          onClick={() => handleChecked(index)}
          index={index}
          checked={checked}
          mode={mode}
        >
          <Img src={`./image/${button}.png`} draggable={false} />
        </MultipleButton>
      ))}
    </Buttons>
  );
};

export default HorizontalMultiple;
