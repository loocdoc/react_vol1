import React from "react";

import { Header, Footer, Content } from "./components/layout";

import './App.css';

function App() {
  const testUser = {
    firstName: "Demo firstname",
    lastName: "Demo lastname"
  };

  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;


