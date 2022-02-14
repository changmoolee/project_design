import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import ModalDemo from "../features/Modal/ModalDemo";
import TabsDemo from "../features/Tabs/TabsDemo";
import TagDemo from "../features/Tag/TagDemo";
import ToggleDemo from "../features/Toggle/ToggleDemo";
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
        <Route path="/Modal" element={<ModalDemo />} />
        <Route path="/Tabs" element={<TabsDemo />} />
        <Route path="/Tag" element={<TagDemo />} />
        <Route path="/Toggle" element={<ToggleDemo />} />
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
