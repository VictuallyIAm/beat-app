import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Beats from './pages/Beats'
import Contacts from './pages/Contacts'
import Drumkits from './pages/Drumkits'
import Sounds from './pages/Sounds'
import NotFound from './pages/NotFound'
import About from './pages/About'
import MainLayout from './layouts/MainLayout'
import Samples from './pages/Samples'
// import Login from './pages/auth/Login'
// import Register from './pages/auth/Register'
// import Reset from './pages/auth/Reset'
import './App.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="about" element={<About />} />
            <Route index element={<Beats />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="drumkits" element={<Drumkits />} />
            <Route path="sounds" element={<Sounds />} />
            <Route path="samples" element={<Samples />} />
            {/* <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="resetpass" element={<Reset />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
