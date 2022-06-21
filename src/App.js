import { Routes, Route } from "react-router-dom";
import "./App.css";
import Employees from "./pages/Employees";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  );
}

export default App;
