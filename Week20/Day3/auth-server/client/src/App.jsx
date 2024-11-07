import './App.css'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import LoginRegister from './components/LoginRegister'
import { Route, Routes } from 'react-router-dom'
import { createContext, useState } from 'react'
import Admin from './components/Admin'
import Auth from './auth/Auth'

export const AuthContext = createContext();

function App() {
 const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider value={{token, setToken}}>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<Auth><Admin /></Auth>} />
        <Route path="/login" element={<LoginRegister mode='Login' />} />
        <Route path="/register" element={<LoginRegister mode='Register' />} />
      </Routes>
    </AuthContext.Provider>
  )
}

export default App
