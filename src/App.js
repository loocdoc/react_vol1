import React from "react";

import { Header, Footer, } from "./components/layout";
import { Routes } from './Routes';

import './App.css';

function App() {
  const testUser = {
    firstName: "Demo firstname",
    lastName: "Demo lastname"
  };

  return (
    <div className="container">
      <Header />
      {/* <Content /> */}
      <Routes />
      <Footer />
    </div>
  );
}

export default App;


