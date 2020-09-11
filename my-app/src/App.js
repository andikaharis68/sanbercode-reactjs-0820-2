
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Tugas-15/components/navbar";
import Routes from "./Tugas-15/components/routes";
import ThemeContextProvider from "./Tugas-15/contexts/theme";
import "./App.css";

const App = () => (
  <ThemeContextProvider>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <br />
        <br />
        <br />
        <Routes />
      </div>
    </BrowserRouter>
  </ThemeContextProvider>
);

export default App;