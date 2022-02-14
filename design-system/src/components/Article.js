import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import ModalDemo from "../features/Modal/ModalDemo";
import TabsDemo from "../features/Tabs/TabsDemo";
import TagDemo from "../features/Tag/TagDemo";
import ToggleDemo from "../features/Toggle/ToggleDemo";
import AutoComplete from "../features/AutoComplete";
import ClickToEdit from "../features/ClickToEdit";
import ToggleButtonsDemo from "../features/ToggleButtons/ToggleButtonsDemo";
import SliderDemo from "../features/Slider/SliderDemo";
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
        <Route path="/Modal" element={<ModalDemo />} />
        <Route path="/Tabs" element={<TabsDemo />} />
        <Route path="/Tag" element={<TagDemo />} />
        <Route path="/Toggle" element={<ToggleDemo />} />
        <Route path="/AutoComplete" element={<AutoComplete />} />
        <Route path="/ClickToEdit" element={<ClickToEdit />} />
        <Route path="/ToggleButtons" element={<ToggleButtonsDemo />} />
        <Route path="/Slider" element={<SliderDemo />} />
        <Route path="/Drag" element={<Drag />} />
      </Routes>
    </Container>
  );
};

export default Article;
