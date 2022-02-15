import React, { useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  width: ${(props) => props.size.width}px;
  height: ${(props) => props.size.height}px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;
const Shadow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  background: ${(props) =>
    props.controlMode === "disabled"
      ? props.color.disabledColor.shadow
      : props.controlMode === "defaultChecked"
      ? props.color.defaultCheckedColor.shadow
      : props.checked
      ? props.color.checked.shadow
      : props.color.unChecked.shadow};
  transition: 0.3s;
`;

const Ball = styled.div`
  position: relative;
  width: ${(props) => props.size.ballSize}px;
  height: ${(props) => props.size.ballSize}px;
  transform: ${(props) =>
    props.controlMode === "disabled"
      ? "none"
      : props.controlMode === "defaultChecked"
      ? `translate(${props.size.width - props.size.ballSize}px ,0)`
      : props.checked
      ? `translate(${props.size.width - props.size.ballSize}px ,0)`
      : "translate(0 ,0)"};
  border-radius: 5px;
  background: ${(props) =>
    props.controlMode === "disabled"
      ? props.color.disabledColor.ball
      : props.controlMode === "defaultChecked"
      ? props.color.defaultCheckedColor.ball
      : props.checked
      ? props.color.checked.ball
      : props.color.unChecked.ball};
  transition: 0.3s;
`;

const SquareToggle = ({ color, controlMode, size }) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked((checked) => !checked);
  };
  return (
    <ToggleContainer onClick={handleToggle} checked={checked} size={size}>
      <Shadow color={color} controlMode={controlMode} checked={checked}>
        <Ball
          color={color}
          controlMode={controlMode}
          checked={checked}
          size={size}
        />
      </Shadow>
    </ToggleContainer>
  );
};

export default SquareToggle;
