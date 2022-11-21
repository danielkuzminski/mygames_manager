// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages and components
import Home from './pages/Home';
import Add from './pages/Add';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add_game' element={<Add />} />
          <Route path='/edit_game' element={<Edit />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
