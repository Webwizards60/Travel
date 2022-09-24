import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./overview";
import TopNav from "./topNav";
import SideNav from "./sideNav";
import Home from "./home";
import Image from "./image";

const App = () => {
  return (
    <Router>
      <TopNav />
      <SideNav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/add-images" element={<Image />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
