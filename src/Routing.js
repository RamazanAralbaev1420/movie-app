import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Movies from './pages/Movies';
import Series from './pages/Series';
import Search from './pages/Search';  
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import Trends from './pages/Trends';
import SingleMovie from './pages/SingleMovie';


function Routing() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trends/pages/:page' element={<Trends />} />
        <Route path='/movies/pages/:page' element={<Movies />} />
        <Route path='/series/pages/:page' element={<Series />} />
        <Route path='/search' element={<Search />} />
        <Route path='/single-movie/:id' element={<SingleMovie />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
