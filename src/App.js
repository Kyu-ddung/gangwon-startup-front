import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from './pages/Register';
import Board from './pages/Board';
function App() {
  return (
    <Routes>
      <Route path='/' exact={true} element={<Home />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/board' element={<Board/>}/>
    </Routes>
  );
}

export default App;
