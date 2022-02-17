import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: black 1px solid;
`;
const SliderContainer = styled.div`
  height: ${(props) => props.sliderSize.width}px;
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
  position: absolute;
  width: ${(props) => props.sliderSize.width}px;
  transform: rotate(270deg);
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

const Vertical = ({
  figures,
  color,
  bottomFalseImage,
  bottomTrueImage,
  sliderSize,
  thumbSize,
}) => {
  const [value, setValue] = useState(Number(figures.value));

  const handleChangeValue = (e) => {
    setValue(Number(e.target.value));
  };

  const mute = () => {
    setValue(Number(figures.min));
  };

  return (
    <>
      <Container>
        <SliderContainer sliderSize={sliderSize}>
          <Volume
            type="range"
            orient="vertical"
            min={figures.min}
            max={figures.max}
            step={figures.step}
            value={value}
            color={color}
            sliderSize={sliderSize}
            thumbSize={thumbSize}
            onChange={(e) => handleChangeValue(e)}
          />
        </SliderContainer>

        {value === Number(figures.min) ? (
          <ImgButton onClick={mute} bottomFalseImage={bottomFalseImage}>
            <Img src={`/image/${bottomFalseImage}`} draggable={false} />
          </ImgButton>
        ) : (
          <ImgButton onClick={mute} bottomTrueImage={bottomTrueImage}>
            <Img src={`/image/${bottomTrueImage}`} draggable={false} />
          </ImgButton>
        )}
      </Container>
      {value}
    </>
  );
};

export default Vertical;
