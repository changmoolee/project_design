import React from "react";
import styled from "styled-components";
import { FeatureContainer } from "./layout/layout";
import { Feature } from "./layout/layout";

const Container = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: black 1px solid;
`;

const Element = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: center;
  align-items: center;
  border: black 1px solid;
  border-radius: 30px;
  background-color: white;
  z-index: 1;
`;

const Drag = () => {
  let posX = 0;
  let posY = 0;

  const dragStartHandler = (e) => {
    posX = e.clientX;
    posY = e.clientY;
    console.log({ posX, posY });
  };

  const dragHandler = (e) => {
    //[현재 요소의 좌표(left, top) + 현재 커서의 좌표 - 직전 커서의 좌표]
    e.target.style.left = `${e.target.offsetLeft + e.clientX - posX}px`;
    e.target.style.top = `${e.target.offsetTop + e.clientY - posY}px`;
    posX = e.clientX;
    posY = e.clientY;
    let styleLeft = e.target.style.left;
    let styleTop = e.target.style.top;
    let offLeft = e.target.offsetLeft;
    let offTop = e.target.offsetTop;
    console.log({ styleLeft, styleTop, offLeft, offTop });
    console.log({ posX, posY });
  };

  const dragEndHandler = (e) => {
    e.target.style.left = `${e.target.offsetLeft + e.clientX - posX}px`;
    e.target.style.top = `${e.target.offsetTop + e.clientY - posY}px`;
    e.preventDefault();
  };

  return (
    <FeatureContainer>
      <Feature>
        <Container>
          <Element
            draggable="true"
            onDragStart={(e) => dragStartHandler(e)}
            onDrag={(e) => dragHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
          />
        </Container>
      </Feature>
    </FeatureContainer>
  );
};

export default Drag;
