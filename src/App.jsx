import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Draw from "./components/Draw";
import Winner from "./components/Winner";
import Home from "./pages/Home";
import GameScreen from "./pages/GameScreen";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/game" element={<GameScreen isSinglePlayer={true} />} />
          <Route path="/winner/:winnerName" element={<Winner />} />
          <Route path="/draw" element={<Draw />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
