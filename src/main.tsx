import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage/LandingPage'
import Home from './pages/home/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path="/" element={ <App /> }>
          <Route path="" element={<LandingPage />}></Route>
          <Route path="home" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
