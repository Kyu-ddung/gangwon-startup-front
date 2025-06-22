import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from './pages/Register';
import Board from './pages/Board';
import BoardList from './pages/BoardList';
import Policy from './pages/Policy';
import StartupCase from './pages/StartupCase';
function App() {
  return (
    <Routes>
      <Route path='/' exact={true} element={<Home />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/board' element={<Board/>}/>
      <Route path='/boardlist' element={<BoardList/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='/startupcase' element={<StartupCase/>}/>
    </Routes>
  );
}

export default App;
