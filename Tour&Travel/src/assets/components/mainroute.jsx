import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Routeing from './routes';
import Login from './login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Routeing />} />
      </Routes>
    </Router>
  );
};

export default App;
