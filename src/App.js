import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import CampsiteDirectoryPage from "./pages/CampsiteDirectoryPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="contact" element={<ContactPage />}></Route>
        <Route path="directory" element={<CampsiteDirectoryPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
