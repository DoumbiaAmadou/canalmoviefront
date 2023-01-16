import React from "react";
import "./App.css";
import { SearchPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/:params?" element={<SearchPage />} />
      <Route path="/detail/:contentID/:mediaType" element={<DetailPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
