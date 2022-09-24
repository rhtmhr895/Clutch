import './App.css';
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Tshirts from './pages/Tshirts';
import Jeans from './pages/Jeans.Js';

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Tshirts' element={<Tshirts/>}/>
    <Route path='/Jeans' element={<Jeans/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter> 
  

  );
}

export default App;
