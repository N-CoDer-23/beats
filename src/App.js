import './App.css';

import Navbar from './components/navbar/Navbar';
import Shop from './router/Shop/Shop';
import Home from './router/home/Home';
import Support from './router/Support/Support';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/main/Cart';
import SingleRoute from './router/single-route/SingleRoute';
import ShopApple from './components/shopping/ShopApple';
import BannerBot from './components/banner-bot/BannerBot';
import Phone from './components/phone/Phone';
import Register from './components/register/Register';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/product/:id' element={<SingleRoute/>}/>
      </Routes>
      <Cart/>
      <ShopApple/>
      <BannerBot/>
      <Phone/>
      <Register/>
      <Footer/>
    </div>
  );
}

export default App;
