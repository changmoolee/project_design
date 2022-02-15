import React, { useState } from "react";
import styled from "styled-components";
import { FeatureContainer } from "../layout/layout";
import { Feature } from "../layout/layout";
import Box from "./Box";

const Button = styled.div`
  width: 120px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  font-size: 16px;
  color: white;
  background-color: #4a19cd;
  cursor: pointer;
`;

const ModalDemo = () => {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen((open) => !open);
  };
  const size = { width: 600, height: 400 };
  /* You can alter the figures of width and height. (based on "px" figure) */

  const color = { textColor: "black", backgroundColor: "white" };
  /* You can change the color of the modal elements. */

  const title = "Hello, World!";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum quam at sapien convallis placerat. Etiam et viverra erat.";

  return (
    <>
      {open ? (
        <Box
          title={title}
          description={description}
          size={size}
          color={color}
          handleModal={handleModal}
        />
      ) : null}
      <FeatureContainer>
        <Feature>
          <Button onClick={handleModal}>Open Modal</Button>
        </Feature>
      </FeatureContainer>
    </>
  );
};

export default ModalDemo;
