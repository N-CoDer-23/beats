import './App.css';

import Navbar from './components/navbar/Navbar';
import Shop from './router/Shop/Shop';
import Home from './router/home/Home';
import Support from './router/Support/Support';
import { Routes, Route } from 'react-router-dom';

import SingleRoute from './router/single-route/SingleRoute';


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

    </div>
  );
}

export default App;
