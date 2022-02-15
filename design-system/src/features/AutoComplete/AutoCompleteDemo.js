import React from "react";
import styled from "styled-components";
import { FeatureContainer } from "../layout/layout";
import { Feature } from "../layout/layout";
import AutoComplete from "./AutoComplete";
import InputSearch from "./InputSearch";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px black solid;
`;

const AutoCompleteDemo = () => {
  const suggestions = [
    "중고A급",
    "refurbished",
    "antique",
    "rustic",
    "remove",
    "rock",
  ];
  /* These are dummy datas. */

  const size = { width: 400, height: 25 };
  /* You can alter the figures of width and height. (based on "px" figure) */

  return (
    <FeatureContainer>
      <Feature>
        <Container>
          <AutoComplete size={size} suggestions={suggestions} />
        </Container>
        <Container>
          <InputSearch size={size} suggestions={suggestions} />
        </Container>
      </Feature>
    </FeatureContainer>
  );
};

export default AutoCompleteDemo;
