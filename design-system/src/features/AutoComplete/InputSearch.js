import React from "react";
import styled from "styled-components";

const Search = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 16px;
`;
const SuggestionList = styled.datalist``;
const Option = styled.option``;

const InputSearch = ({ width, height, suggestions }) => {
  return (
    <>
      <Search
        type="search"
        maxlength="16"
        placeholder="Search sth..."
        list="suggestionList"
        width={width}
        height={height}
      />
      <SuggestionList id="suggestionList">
        {suggestions.map((suggestion) => (
          <Option value={suggestion} />
        ))}
      </SuggestionList>
    </>
  );
};

export default InputSearch;
