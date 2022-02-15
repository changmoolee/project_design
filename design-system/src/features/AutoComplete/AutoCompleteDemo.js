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

  const width = "400px";
  const height = "25px";
  /* You can alter the figures of width and height. */

  return (
    <FeatureContainer>
      <Feature>
        <Container>
          <AutoComplete
            width={width}
            height={height}
            suggestions={suggestions}
          />
        </Container>
        <Container>
          <InputSearch
            width={width}
            height={height}
            suggestions={suggestions}
          />
        </Container>
      </Feature>
    </FeatureContainer>
  );
};

export default AutoCompleteDemo;
