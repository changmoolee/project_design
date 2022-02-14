import React, { useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  width: 50px;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;
const Shadow = styled.div`
  width: 50px;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  background: ${(props) =>
    props.controlMode === "disabled"
      ? "#3b4754"
      : props.controlMode === "defaultChecked"
      ? "#253d53"
      : props.checked
      ? "#4d7291"
      : "#3b4754"};
  transition: 0.3s;
`;

const Ball = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  transform: ${(props) =>
    props.controlMode === "disabled"
      ? "none"
      : props.controlMode === "defaultChecked"
      ? "translate(80% ,0%)"
      : props.checked
      ? "translate(80% ,0%)"
      : "translate(0% ,0%)"};
  border-radius: 50px;
  background: ${(props) =>
    props.controlMode === "disabled"
      ? "#757575"
      : props.controlMode === "defaultChecked"
      ? "#405a70"
      : props.checked
      ? "#90caf9"
      : "#e0e0e0"};
  transition: 0.3s;
`;

const BasicToggle = ({ controlMode }) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked((checked) => !checked);
  };
  return (
    <ToggleContainer onClick={handleToggle} checked={checked}>
      <Shadow controlMode={controlMode} checked={checked}>
        <Ball controlMode={controlMode} checked={checked}></Ball>
      </Shadow>
    </ToggleContainer>
  );
};

export default BasicToggle;
