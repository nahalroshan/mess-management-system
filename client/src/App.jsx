import react, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute'
import { UserAuthContextProvider } from './UserAuthContext'
import Login from './login'
import Register from './register'
import app from './firebase'
import Home from './home/home';
import Rate from './home/rate';
import Navbar from './home/navbar';

function App() {
  
  return (
    <div className='app'>
    <Router>
    <UserAuthContextProvider>
        <Routes>
        <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
          <Route path = '/' element = {<Login />} />
          <Route path = '/signup' element = {<Register />} />
          <Route path="/rate" element={
            <div>
              <Rate />
              <Navbar />
            </div>
          } />
        </Routes>
        </UserAuthContextProvider>
        </Router>
    </div>
  )
}

export default App