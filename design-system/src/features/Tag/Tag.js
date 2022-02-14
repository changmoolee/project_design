import React from "react";
import styled from "styled-components";

const TagDiv = styled.div`
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 10px;
  border: 1px black solid;
  border-radius: 10px;
  color: white;
  background-color: #4a19cd;
`;
const TagTextElement = styled.div`
  display: inline;
  font-size: 16px;
  margin-left: 5px;
`;
const IconContainer = styled.div`
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
`;
const CloseIcon = styled.img`
  width: 20px;
  object-fit: cover;
`;

const Tag = ({ tags, removeTag }) => {
  return (
    <>
      {tags.map((tag, index) => (
        <TagDiv key={index}>
          <TagTextElement>{tag}</TagTextElement>
          <IconContainer onClick={() => removeTag(index)}>
            <CloseIcon src="./image/delete.png" />
          </IconContainer>
        </TagDiv>
      ))}
    </>
  );
};

export default Tag;
