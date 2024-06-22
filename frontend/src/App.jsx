<<<<<<< HEAD
import { useState } from "react";
import Home from "./Home/Home.jsx";
import "./App.css";
=======
// frontend/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
>>>>>>> TamThong/main

function App() {
  return (
<<<<<<< HEAD
    <>
      <Home />
    </>
=======
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
>>>>>>> TamThong/main
  );
}

export default App;
