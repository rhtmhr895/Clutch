import './App.css';
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Tshirts from './pages/Tshirts';
import Jeans from './pages/Jeans';
import Kids from './pages/Kids';
import HomeLiving from './pages/Home&Living';
import Checkout from './pages/Checkout';

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Tshirts' element={<Tshirts/>}/>
    <Route path='/Jeans' element={<Jeans/>}/>
    <Route path='/Kids' element={<Kids/>}/>
    <Route path='/Home_living' element={<HomeLiving/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Checkout' element={<Checkout/>}/>
    <Route path='/Register' element={<Register/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter> 
  

  );
}

export default App;
