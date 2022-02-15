import React, { useState } from "react";
import { Buttons } from "../ToggleButtonsDemo";
import { Img } from "../ToggleButtonsDemo";
import { ExclusiveButton } from "../ToggleButtonsDemo";

const HorizontalExclusive = ({ buttons, size, mode, color }) => {
  const [checked, setChecked] = useState(0);

  const handleChecked = (index) => {
    setChecked(index);
  };

  return (
    <Buttons size={size} mode={mode}>
      {buttons.map((button, index) => (
        <ExclusiveButton
          onClick={() => handleChecked(index)}
          index={index}
          checked={checked}
          mode={mode}
          color={color}
        >
          <Img src={`./image/${button}`} draggable={false} />
        </ExclusiveButton>
      ))}
    </Buttons>
  );
};

export default HorizontalExclusive;
