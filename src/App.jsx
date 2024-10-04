import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Header from './components/layout/header';
import HomePage from './pages/homePage';

function App() {


  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<HomePage />} />
    </Routes>
    </>
  )
}

export default App
