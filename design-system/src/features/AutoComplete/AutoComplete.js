import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${(props) =>
    props.suggestionOpened ? "0px 3px 3px 3px rgba(0, 0, 0, 0.1)" : "none"};
  border-radius: 10px;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -1px;
`;

const Input = styled.input`
  width: 90%;
  height: 90%;
  display: flex;
  font-size: 16px;
  margin-left: 5px;
  border: none;
  border-radius: 10px;
  &:focus {
    outline: none;
    ::placeholder {
      color: transparent;
    }
  }
`;

const CloseIcon = styled.div`
  width: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border: none;
  border-radius: 10px;
`;

const SuggestionsContainer = styled.ul`
  width: 100%;
  max-height: 200px;
  display: ${(props) => (props.suggestionOpened ? "flex" : "none")};
  flex-direction: column;
  padding: 0px;
  margin: 5px 0px 5px 0px;
  background: white;
  overflow: overlay;
`;
const Suggestion = styled.li`
  width: 98%;
  display: flex;
  margin: 2px 0px 2px 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #dcdcdc;
  }
`;

const AutoComplete = ({ width, height, suggestions }) => {
  const [text, setText] = useState("");
  const [suggestionOpened, setSuggestionOpended] = useState(false);

  const currentInputText = (e) => {
    setText(e.target.value);
  };
  const openSuggestion = () => {
    setSuggestionOpended(true);
  };
  const closeSuggestion = () => {
    setSuggestionOpended(false);
  };
  const eraseInput = () => {
    setText("");
  };
  const pressESC = (event) => {
    if (event.key === "Escape") {
      closeSuggestion();
    }
  };

  return (
    <Container width={width} height={height}>
      <SubContainer suggestionOpened={suggestionOpened}>
        <InputContainer>
          <Input
            placeholder="Please browse here"
            value={text}
            onFocus={openSuggestion}
            onBlur={closeSuggestion}
            onChange={(event) => currentInputText(event)}
            onKeyUp={(event) => pressESC(event)}
          />
          <CloseIcon onClick={eraseInput}>&times;</CloseIcon>
        </InputContainer>
        <SuggestionsContainer suggestionOpened={suggestionOpened}>
          {suggestions.map((suggestion, index) => {
            if (
              suggestion.toLowerCase().includes(text.toLowerCase()) &&
              suggestionOpened &&
              text !== ""
            ) {
              return (
                <Suggestion
                  key={index}
                  onMouseDown={() => {
                    setText(suggestion);
                  }}
                >
                  {suggestion}
                </Suggestion>
              );
            } else {
              return null;
            }
          })}
        </SuggestionsContainer>
      </SubContainer>
    </Container>
  );
};

export default AutoComplete;
