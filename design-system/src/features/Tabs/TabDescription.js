import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.descriptionSize.width}px;
  height: ${(props) => props.descriptionSize.height}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.descriptionColor.backgroundColor};
`;
const Title = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 24px;
  color: ${(props) => props.descriptionColor.textColor};
`;
const Description = styled.div`
  width: 90%;
  height: 65%;
  display: flex;
  justify-content: flex;
  font-size: 16px;
  color: ${(props) => props.descriptionColor.textColor};
`;

const TabDescription = ({
  tabTitle,
  tabDescription,
  tabIndex,
  descriptionSize,
  descriptionColor,
}) => {
  return (
    <Container
      descriptionSize={descriptionSize}
      descriptionColor={descriptionColor}
    >
      <Title descriptionColor={descriptionColor}>{tabTitle[tabIndex]}</Title>
      <Description descriptionColor={descriptionColor}>
        {tabDescription[tabIndex]}
      </Description>
    </Container>
  );
};

export default TabDescription;
