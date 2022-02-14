import React, { useState } from "react";
import styled from "styled-components";

const ToggleButton = styled.span`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.checked[props.index] ? "gray" : "none")};
  border: black 1px solid;
`;
const Img = styled.img`
  width: 50px;
  height: 30px;
  object-fit: contain;
`;

const Multiple = () => {
  const buttons = ["left", "center", "right"];
  const [checked, setChecked] = useState([false, false, false]);

  const handleChecked = (index) => {
    let checkedCopy = [...checked];
    checkedCopy[index] = !checkedCopy[index];
    setChecked(checkedCopy);
  };

  return (
    <>
      {buttons.map((button, index) => (
        <ToggleButton
          onClick={() => handleChecked(index)}
          index={index}
          checked={checked}
        >
          <Img src={`./image/align-${button}.png`} />
        </ToggleButton>
      ))}
    </>
  );
};

export default Multiple;
