import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Article from "../components/Article";
import Footer from "../components/Footer";

const Body = styled.section`
  display: flex;
`;

const Main = () => {
  return (
    <>
      <Header />
      <Body>
        <Sidebar />
        <Article />
      </Body>
      <Footer />
    </>
  );
};

export default Main;
