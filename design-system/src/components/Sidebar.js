import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { features } from "../features/data/data";

const Container = styled.div`
  width: 250px;
  height: 100vh;
  border: black solid 1px;
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  border: red solid 1px;
  overflow: auto;
`;

const Feature = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: blue solid 1px;
`;

const Sidebar = () => {
  return (
    <Container>
      <Section>
        {features.map((feature) => (
          <Feature>
            <Link to={`/${feature}`}>{feature}</Link>
          </Feature>
        ))}
      </Section>
    </Container>
  );
};

export default Sidebar;
