import logo from "./logo.svg";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Sidebar from "./components/Sidebar";
import Table from "./components/table";
import Form from "./components/form";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/table" element={<Table />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
