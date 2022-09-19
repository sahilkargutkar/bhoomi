import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import Charts from "./pages/Charts";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProjectDetails from "./pages/ProjectDetails";
import PDF from "./pages/PDF";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/report/pdfreport" element={<PDF />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
