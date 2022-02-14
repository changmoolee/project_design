import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: black 1px solid;
`;
const ImgButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: center;
  align-items: center;
  border: none;
  border-radius: 10px;
`;
const Img = styled.img`
  width: 50px;
  height: 30px;
  object-fit: contain;
`;
const SliderContainer = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: black 1px solid;
`;
const Volume = styled.input`
  width: 250px;
  height: 5px;
`;

const Horizontal = ({ min, max, step }) => {
  const [value, setValue] = useState(Number(min));

  const handleChangeValue = (e) => {
    setValue(Number(e.target.value));
    console.log(value);
  };
  const increaseValue = () => {
    if (value < max) {
      setValue(Number(value + Number(step)));
      console.log(value);
    }
  };
  const decreaseValue = () => {
    if (value > min) {
      setValue(Number(value - Number(step)));
      console.log(value);
    }
  };
  return (
    <Container>
      <ImgButton onClick={decreaseValue}>
        <Img src="./image/volume-down.png" />
      </ImgButton>
      <SliderContainer>
        <Volume
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => handleChangeValue(e)}
        ></Volume>
      </SliderContainer>
      <ImgButton onClick={increaseValue}>
        <Img src="./image/volume-up.png" />
      </ImgButton>
    </Container>
  );
};

export default Horizontal;
