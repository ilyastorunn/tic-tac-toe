import "./App.css";
import SingleGrid from "./components/SingleGrid";
import MultiGrid from "./components/MultiGrid";
import Home from "./pages/Home";
import SelectScreen from "./pages/SelectScreen";
import GameMode from "./pages/GameMode";
import GameScreen from "./pages/GameScreen";

function App() {
  return (
    <>
        <div className="app">
          <GameScreen />
        </div>
    </>
  );
}

export default App;
