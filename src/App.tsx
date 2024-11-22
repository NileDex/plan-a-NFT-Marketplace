import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Hero from "./hero/hero";
import Signup from "./component/signup";
import Login from "./component/login";
import Goal from "./component/goal";
import Dashboard from "./component/dashboard/dashboard";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/goal" element={<Goal />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
