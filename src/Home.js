import React from "react";
import { Switch, Route } from "react-router-dom";

import Form from "./SearchForm";
import Movies from "./Movies";
function App() {
  return (
    <main>
      <Form />
      <Movies />
    </main>
  );
}

export default App;
