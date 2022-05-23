import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Singin from "./components/Singin";
import Singup from "./components/Singup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/singin" element={<Singin />} />
      </Routes>
    </>
  );
}

export default App;
