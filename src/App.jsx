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
import ElectronicPage from './pages/electronicPage';
import EstatePage from './pages/estatePage';
import WorkPage from './pages/workPage';
import AnimalsPage from './pages/animalsPage';

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
    <Route path="/electronic" element={<ElectronicPage />} />
    <Route path="/estate" element={<EstatePage />} />
    <Route path="/work" element={<WorkPage />} />
    <Route path="/animals" element={<AnimalsPage />} />
    </Routes>
    </>
  )
}

export default App
