// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages and components
import Home from './pages/Home';
import Add from './pages/Add';
import NotFound from './pages/NotFound';
import Game from './pages/Game';
import Navbar from './components/Navbar';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add_game' element={<Add />} />
          <Route path='/games/:id' element={<Game />} ></Route>
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
