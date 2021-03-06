import React, { useState } from "react";
import styled from "styled-components";
import { FeatureContainer } from "./layout/layout";
import { Feature } from "./layout/layout";
import { Manual } from "./layout/layout";

const Container = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const EditContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 60%;
  height: 50%;
  text-align: center;
  margin-left: 15px;
  font-size: 20px;
  border: gray solid 1px;
  border-radius: 5px;
`;

const ClickToEdit = () => {
  const [name, setName] = useState("이름");
  const [age, setAge] = useState(0);

  const editName = (e) => {
    setName(e.target.value);
  };
  const editAge = (e) => {
    setAge(e.target.value);
  };

  return (
    <FeatureContainer>
      <Feature>
        <Container>
          <EditContainer>
            이름
            <Input defaultValue={name} onBlur={(e) => editName(e)} />
          </EditContainer>
          <EditContainer>
            나이
            <Input defaultValue={age} onBlur={(e) => editAge(e)} />
          </EditContainer>
        </Container>
        이름 {name} 나이 {age}
      </Feature>
      <Manual></Manual>
    </FeatureContainer>
  );
};

export default ClickToEdit;
