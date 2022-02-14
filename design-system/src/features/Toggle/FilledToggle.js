import React, { useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Shadow = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 20px;
  background: #dcdcdc;
  background: ${(props) =>
    props.controlMode === "disabled"
      ? "#3b4754"
      : props.controlMode === "defaultChecked"
      ? "#253d53"
      : props.checked
      ? "linear-gradient(to right, #4d7291 50%, #3b4754 50%) left"
      : "linear-gradient(to right, #4d7291 50%, #3b4754 50%) right"};
  background-size: 200%;
  transition: 0.3s;
`;

const Ball = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  transform: ${(props) =>
    props.controlMode === "disabled"
      ? "translate(20% ,0%)"
      : props.controlMode === "defaultChecked"
      ? "translate(150% ,0%)"
      : props.checked
      ? "translate(150% ,0%)"
      : "translate(20% ,0%)"};
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

const FilledToggle = ({ controlMode }) => {
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

export default FilledToggle;
