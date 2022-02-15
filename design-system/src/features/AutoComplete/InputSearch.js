import React from "react";
import styled from "styled-components";

const Search = styled.input`
  width: ${(props) => props.size.width}px;
  height: ${(props) => props.size.height}px;
  font-size: 16px;
`;
const SuggestionList = styled.datalist``;
const Option = styled.option``;

const InputSearch = ({ size, suggestions }) => {
  return (
    <>
      <Search
        type="search"
        maxlength="16"
        placeholder="Search sth..."
        list="suggestionList"
        size={size}
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
