import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import RegisterForm from './Pages/RegisterPage'
import PricePage from './Pages/PricePage'
import JobBoard from './JobBoard/JobBoard'
import FindJob from './Pages/FindJob'
import Candidates from './Pages/Candidates'
import { useState } from 'react'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<Main />} />
        <Route path="/price" element={<PricePage/>} />
        <Route path="/candidates" element={<Candidates/>} />
        <Route path="/jobboard" element={<JobBoard/>} />
        <Route path="/joblist" element={<FindJob/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
