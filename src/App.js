// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages and components
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Add from './pages/Add';
import NotFound from './pages/NotFound';
import Game from './pages/Game';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/add_game' element={<Add />} />
          <Route path='/home/games/:id' element={<Game />} ></Route>
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
