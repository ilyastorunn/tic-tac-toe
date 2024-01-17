import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SingleGrid from "./components/SingleGrid";
import Winner from "./components/MultiGrid";
import Home from "./pages/Home";
import SelectScreen from "./pages/SelectScreen";
import GameMode from "./pages/GameMode";
import GameScreen from "./pages/GameScreen";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/game" element={<GameScreen />}  />
          <Route path="/selection" element={<SelectScreen />} />
          <Route path="/gamemode" element={<GameMode />} />
          <Route path="/winner/:winnerName" element={<Winner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
