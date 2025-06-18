import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import RegisterForm from './Pages/RegisterPage'

function App() {
  return (
    <>
   <Header/>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    <Footer/>
   </>
  )
}

export default App
  