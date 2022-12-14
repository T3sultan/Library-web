import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./views/components/NabBar/Header";
import NavBar from "./views/components/NabBar/Navbar";
import Login from "./views/pages/auth/Login";
import Signup from "./views/pages/auth/Signup";
import Dashboard from "./views/pages/Dashboard/Dashboard";
import MyHome from "./views/pages/myBook/MyBook";

function App() {
  return (
    <div className="container">
      <div className="mr-16 ml-16  ">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<MyHome />}></Route>
          <Route path="/home" element={<MyHome />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
