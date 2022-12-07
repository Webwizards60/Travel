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
import UnprotectedRoutes from "./components/Routes/Unprotectedroutes";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/auth/login"
            element={
              <UnprotectedRoutes>
                <Login />
              </UnprotectedRoutes>
            }
          />
        </Routes>
        <TopNav />
        <SideNav />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
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
