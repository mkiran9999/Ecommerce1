import React from 'react';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import CompareProducts from './pages/CompareProducts';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Layout/>}>
                    <Route index element={<Home />}/>
                    <Route path='about' element={<About />}/>
                    <Route path='about/contact' element={<Contact />}/>
                    <Route path='wishlist' element={<Wishlist />}/>
                    <Route path='CompareProducts' element={<CompareProducts />}/>
                    <Route path='signup' element={<SignUp />}/>
                    <Route path='login' element={<Login />}/>
                    <Route path='cart' element={<Cart />}/>
                    <Route path='product/:id' element={<SingleProduct />}/>
                    <Route path='checkout' element={<CheckOut />}/>
                </Route>
              </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
