import React, { useState } from "react";
import styled from "styled-components";

const ToggleButtonGroup = styled.section`
  width: ${(props) => props.length.width};
  height: ${(props) => props.length.height};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: black 1px solid;
  border-radius: 10px;
  overflow: hidden;
`;
const ToggleButton = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.checked[props.index] ? "gray" : "none")};
  border: black 1px solid;
`;
const Img = styled.img`
  width: 100%;
  height: 80%;
  object-fit: contain;
`;

const VerticalMultiple = ({ buttons, VerticalLength }) => {
  const [checked, setChecked] = useState(Array(buttons.length).fill(false));

  const handleChecked = (index) => {
    let checkedCopy = [...checked];
    checkedCopy[index] = !checkedCopy[index];
    setChecked(checkedCopy);
  };

  return (
    <ToggleButtonGroup length={VerticalLength}>
      {buttons.map((button, index) => (
        <ToggleButton
          onClick={() => handleChecked(index)}
          index={index}
          checked={checked}
        >
          <Img src={`./image/${button}.png`} />
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default VerticalMultiple;
