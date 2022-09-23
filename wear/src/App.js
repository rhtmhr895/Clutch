import './App.css';
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
// import Login from './pages/Login';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
  </Routes>
  
  </BrowserRouter> 
  

  );
}

export default App;
