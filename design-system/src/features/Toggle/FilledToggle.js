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
  border-radius: 20px;
  background: #dcdcdc;
  background: ${(props) =>
    props.controlMode === "disabled"
      ? props.color.disabledColor.shadow
      : props.controlMode === "defaultChecked"
      ? props.color.defaultCheckedColor.shadow
      : props.checked
      ? `linear-gradient(to right, ${props.color.checked.shadow} 50%, #3b4754 50%) left`
      : `linear-gradient(to right, ${props.color.unChecked.shadow} 50%, #3b4754 50%) right`};
  background-size: 200%;
  transition: 0.3s;
`;

const Ball = styled.div`
  position: relative;
  width: ${(props) => props.size.ballSize}px;
  height: ${(props) => props.size.ballSize}px;
  transform: ${(props) =>
    props.controlMode === "disabled"
      ? "translate(5px ,0)"
      : props.controlMode === "defaultChecked"
      ? `translate(${props.size.width - props.size.ballSize - 5}px ,0)`
      : props.checked
      ? `translate(${props.size.width - props.size.ballSize - 5}px ,0)`
      : "translate(5px  ,0)"};
  border-radius: 100px;
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

const FilledToggle = ({ color, controlMode, size }) => {
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

export default FilledToggle;
