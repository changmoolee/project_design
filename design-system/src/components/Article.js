import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Modal from "../features/Modal";
import Tab from "../features/Tab";
import Tag from "../features/Tag";
import Toggle from "../features/Toggle";
import AutoComplete from "../features/AutoComplete";
import ClickToEdit from "../features/ClickToEdit";
import ToggleButtons from "../features/ToggleButtons";
import Slider from "../features/Slider";
import Drag from "../features/Drag";
const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border: green 1px solid;
`;

const Article = () => {
  return (
    <Container>
      <Routes>
        <Route path="/">Article</Route>
        <Route path="/Modal" element={<Modal />} />
        <Route path="/Tab" element={<Tab />} />
        <Route path="/Tag" element={<Tag />} />
        <Route path="/Toggle" element={<Toggle />} />
        <Route path="/AutoComplete" element={<AutoComplete />} />
        <Route path="/ClickToEdit" element={<ClickToEdit />} />
        <Route path="/ToggleButtons" element={<ToggleButtons />} />
        <Route path="/Slider" element={<Slider />} />
        <Route path="/Drag" element={<Drag />} />
      </Routes>
    </Container>
  );
};

export default Article;
