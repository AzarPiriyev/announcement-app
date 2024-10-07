import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Header from './components/layout/header';
import HomePage from './pages/homePage';
import DetailPage from './pages/detailPage';
import WishlistPage from './pages/wishlist';
import NewPage from './pages/newPage';

function App() {


  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/detail/:id" element={<DetailPage />} />
    <Route path="/wishlist" element={<WishlistPage />} />
    <Route path="/new" element={<NewPage />} />
    </Routes>
    </>
  )
}

export default App
