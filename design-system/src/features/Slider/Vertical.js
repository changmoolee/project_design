import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 500px;
  display: flex;
  flex-direction: column;
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
  background: none;
  border-radius: 10px;
`;
const Img = styled.img`
  width: 50px;
  height: 30px;
  object-fit: contain;
`;
const SliderContainer = styled.div`
  width: 50px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: black 1px solid;
`;
const Volume = styled.input`
  position: absolute;
  width: 250px;
  height: 5px;
  transform: rotate(270deg);
`;

const Vertical = ({ min, max, step }) => {
  const [value, setValue] = useState(Number(min));

  const handleChangeValue = (e) => {
    setValue(Number(e.target.value));
    console.log(value);
  };

  const mute = () => {
    setValue(Number(min));
  };
  return (
    <Container>
      <SliderContainer>
        <Volume
          type="range"
          orient="vertical"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => handleChangeValue(e)}
        />
      </SliderContainer>
      <ImgButton onClick={mute}>
        {value === Number(min) ? (
          <Img src="./image/mute.png" />
        ) : (
          <Img src="./image/volume-up.png" />
        )}
      </ImgButton>
    </Container>
  );
};

export default Vertical;
