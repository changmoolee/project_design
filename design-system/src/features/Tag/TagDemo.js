import React, { useState } from "react";
import styled from "styled-components";
import { FeatureContainer } from "../layout/layout";
import { Feature } from "../layout/layout";
import Tag from "./Tag";

const Container = styled.div`
  width: 800px;
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
  const onChangeTagText = (e) => setTagText(e.target.value);

  return (
    <FeatureContainer>
      <Feature>
        <Container>
          <Tag tags={tags} removeTag={removeTag} />
          <TagInput
            value={tagText}
            placeholder="Please enter to add Tags"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                addTag(e.target.value);
                setTagText("");
              }
            }}
            onChange={(e) => onChangeTagText(e)}
          />
        </Container>
      </Feature>
    </FeatureContainer>
  );
};

export default TagDemo;
