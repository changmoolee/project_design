import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.size.width}px;
  height: ${(props) => props.size.height}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.color.textColor};
  background-color: ${(props) => props.color.backgroundColor};
  border-radius: 20px;
  z-index: 1;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 15%;
  margin-right: 10px;
`;
const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
  font-size: 36px;
  cursor: pointer;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  height: 30%;
  font-size: 36px;
`;
const Description = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  height: 70%;
  font-size: 24px;
`;

const Box = ({ title, description, size, color, handleModal }) => {
  return (
    <>
      <Wrapper onClick={handleModal} />
      <Container size={size} color={color} onClick={(e) => e.stopPropagation()}>
        <IconContainer>
          <Icon onClick={handleModal}>&times;</Icon>
        </IconContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Container>
    </>
  );
};

export default Box;
