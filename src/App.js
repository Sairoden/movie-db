import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="movies/:id" element={<Movie />} exact />
    </Routes>
  );
}

export default App;
