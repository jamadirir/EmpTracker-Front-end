import { Button } from 'antd';
import './index.css'
import Home  from './pages/Home';
import Login from './pages/Login';
import Register  from './pages/Register';
import {Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>


    </>
  );
}

export default App;
