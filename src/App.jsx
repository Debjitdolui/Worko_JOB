import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Companies from "./components/Companies";
import CareerGuidance from "./components/CareerGuidance";
import MockInterviews from "./components/MockInterviews";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Chome from "./components/user/Chome";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/careerguidance" element={<CareerGuidance />} />
        <Route path="/mockinterviews" element={<MockInterviews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chome" element={<Chome />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
