import React, { useState } from "react";
import { Buttons } from "../ToggleButtonsDemo";
import { Img } from "../ToggleButtonsDemo";
import { MultipleButton } from "../ToggleButtonsDemo";

const HorizontalMultiple = ({ buttons, size, mode, color }) => {
  const [checked, setChecked] = useState(Array(buttons.length).fill(false));

  const handleChecked = (index) => {
    let checkedCopy = [...checked];
    checkedCopy[index] = !checkedCopy[index];
    setChecked(checkedCopy);
  };

  return (
    <Buttons size={size} mode={mode}>
      {buttons.map((button, index) => (
        <MultipleButton
          onClick={() => handleChecked(index)}
          index={index}
          checked={checked}
          mode={mode}
          color={color}
        >
          <Img src={`./image/${button}`} draggable={false} />
        </MultipleButton>
      ))}
    </Buttons>
  );
};

export default HorizontalMultiple;
