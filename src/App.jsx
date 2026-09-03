import { BrowserRouter, Routes, Route } from "react-router"
import './App.css'
import Login from "./pages/Login"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
