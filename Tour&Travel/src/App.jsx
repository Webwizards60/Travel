import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./components/overview";
import TopNav from "./components/topNav";
import SideNav from "./components/sideNav";
import Home from "./components/home";
import Place from "./components/place";
import Image from "./components/images";
import Users from "./components/users";
import Login from "./components/login";

const App = () => {
  return (
    <>
      <Router>
        <TopNav />
        <SideNav />
        <Routes>
          <Route path=" " element={<Home />} />
          <Route path="/Overview" element={<Overview />} />
          <Route path="/add-places" element={<Place />} />
          <Route path="/add-images" element={<Image />} />
          <Route path="/add-users" element={<Users />} />
        </Routes>
        {/* <Login /> */}
      </Router>
    </>
  );
};

export default App;
