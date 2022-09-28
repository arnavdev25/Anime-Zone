import { Route, Routes } from 'react-router-dom';
import './App.css';
import Anime from './pages/Anime';
import Home from './pages/Home';
import WatchList from './pages/WatchList';

function App() {
  return (
    <div className="App">
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="anime/:mal_id" element={<Anime/>}/>
    <Route path="/watchlist" element={<WatchList/>}/>
  </Routes>
    </div>
  );
}

export default App;
