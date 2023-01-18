import React from "react";
import "./App.css";
import { SearchPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/detail/:contentID?/:mediaType?" element={<DetailPage />} />
      <Route path="/:params?" element={<SearchPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
