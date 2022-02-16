import React, { useState } from "react";
import styled from "styled-components";
import { FeatureContainer } from "../layout/layout";
import { Feature } from "../layout/layout";
import { Manual } from "../layout/layout";
import Tag from "./Tag";

const Container = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px black solid;
  overflow: overlay;
`;
const TagInput = styled.input`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  font-size: 16px;
  border: none;
`;

const TagDemo = () => {
  const [tags, setTags] = useState([]);
  const [tagText, setTagText] = useState("");

  const addTag = (tag) => {
    if (tag !== "") {
      return setTags([...tags, tag]);
    }
  };
  const removeTag = (index) => {
    let tagsCopy = [...tags];
    tagsCopy.splice(index, 1);
    return setTags([...tagsCopy]);
  };
  const onChangeTagText = (event) => setTagText(event.target.value);

  return (
    <FeatureContainer>
      <Feature>
        <Container>
          <Tag tags={tags} removeTag={removeTag} />
          <TagInput
            value={tagText}
            placeholder="Please enter to add Tags"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                addTag(event.target.value);
                setTagText("");
              }
            }}
            onChange={(event) => onChangeTagText(event)}
          />
        </Container>
      </Feature>
      <Manual></Manual>
    </FeatureContainer>
  );
};

export default TagDemo;
