import React from "react";
import "./App.css";
import ContractManagement from "./component/ContractManagement";
import AdstrativeManagement from "./component/AdstrativeManagement";
import FinanceManage from "./page/FinanceManage";
import SchedulePage from "./page/schedulePage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContractManagement />} />
      <Route path="/adstr" element={<AdstrativeManagement />} />
      <Route path="/finac" element={<FinanceManage />} />
      <Route path="/schedul" element={<SchedulePage />} />
    </Routes>
  );
}

export default App;
