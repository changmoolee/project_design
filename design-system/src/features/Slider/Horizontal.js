import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: black 1px solid;
`;
const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgButton = styled.button`
  width: 50px;
  height: 50px;
  display: ${(props) =>
    props.rightImage === "none" ||
    props.leftImage === "none" ||
    props.bottomFalseImage === "none" ||
    props.bottomTrueImage === "none"
      ? "none"
      : "flex"};
  flex-direction: center;
  align-items: center;
  border: none;
  background: none;
`;
const Img = styled.img`
  width: 50px;
  height: 30px;
  object-fit: contain;
`;

const Volume = styled.input`
  width: ${(props) => props.sliderSize.width}px;
  appearance: none;
  ::-webkit-slider-thumb {
    width: ${(props) => props.thumbSize.width}px;
    height: ${(props) => props.thumbSize.height}px;
    margin-top: -${(props) => (props.thumbSize.height - props.sliderSize.height) / 2}px;
    background: ${(props) => props.color.thumbColor};
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
    -webkit-appearance: none;
  }
  ::-webkit-slider-runnable-track {
    height: ${(props) => props.sliderSize.height}px;
    background: ${(props) => props.color.trackColor};
    cursor: pointer;
  }
  :hover::-webkit-slider-thumb {
    background: ${(props) => props.color.hoverThumbColor};
  }
  :hover::-webkit-slider-runnable-track {
    background: ${(props) => props.color.hoverTrackColor};
  }
`;

const Horizontal = ({
  figures,
  color,
  leftImage,
  rightImage,
  sliderSize,
  thumbSize,
}) => {
  const [value, setValue] = useState(Number(figures.min));

  const handleChangeValue = (e) => {
    setValue(Number(e.target.value));
  };
  const increaseValue = () => {
    if (value < figures.max) {
      setValue(Number(value + Number(figures.step)));
    }
  };
  const decreaseValue = () => {
    if (value > figures.min) {
      setValue(Number(value - Number(figures.step)));
    }
  };
  return (
    <Container>
      <ImgButton onClick={decreaseValue} leftImage={leftImage}>
        <Img src={`./image/${leftImage}`} draggable={false} />
      </ImgButton>
      <SliderContainer>
        <Volume
          type="range"
          min={figures.min}
          max={figures.max}
          step={figures.step}
          value={value}
          color={color}
          onChange={(e) => handleChangeValue(e)}
          sliderSize={sliderSize}
          thumbSize={thumbSize}
        />
      </SliderContainer>
      <ImgButton onClick={increaseValue} rightImage={rightImage}>
        <Img src={`./image/${rightImage}`} draggable={false} />
      </ImgButton>
    </Container>
  );
};

export default Horizontal;
