
import './App.css'
import SingleGrid from './components/SingleGrid'
import MultiGrid from './components/MultiGrid'
import Home from './pages/Home'
import SelectScreen from './pages/SelectScreen'
import GameMode from './pages/GameMode'

function App() {
  return (
    <>
      <div className='app'>
        {/* <SingleGrid /> */}
        {/* <MultiGrid /> */}
        {/* <Home /> */}
        {/* <SelectScreen /> */}
        <GameMode />
      </div>
    </>
  )
}

export default App
