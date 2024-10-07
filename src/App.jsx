import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Header from './components/layout/header';
import HomePage from './pages/homePage';
import DetailPage from './pages/detailPage';
import WishlistPage from './pages/wishlist';
import NewPage from './pages/newPage';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import AccountPage from './pages/accountPage';

function App() {


  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/detail/:id" element={<DetailPage />} />
    <Route path="/wishlist" element={<WishlistPage />} />
    <Route path="/new" element={<NewPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/account" element={<AccountPage />} />
    </Routes>
    </>
  )
}

export default App
