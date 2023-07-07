import React from "react";
import { SearchPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import "@picocss/pico/css/pico.min.css";
const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route
          path="/detail/:contentID?/:mediaType?"
          element={<DetailPage />}
        />
        <Route path="/:params?" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
