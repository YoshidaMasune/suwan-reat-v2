import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Admin from './pages/Admin';
import { createContext } from 'react';



function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/login'  element={ <Login />} />
        <Route path='/'  element={ <Home />} />
        <Route path='/admin' element={ <Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
