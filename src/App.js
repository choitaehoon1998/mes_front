import React from "react";
import "./App.css";
import ContractManagement from "./component/ContractManagement";
import AdstrativeManagement from "./component/AdstrativeManagement";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContractManagement />} />
      <Route path="/adstr" element={<AdstrativeManagement />} />
    </Routes>
  );
}

export default App;
