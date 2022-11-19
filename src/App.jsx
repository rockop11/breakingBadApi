import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import ChardId from "./pages/charId";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<ChardId />} />
      </Routes>
    </div>
  );
};
