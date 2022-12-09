import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Beats from './pages/Beats'
import Contacts from './pages/Contacts'
import Drumkits from './pages/Drumkits'
import Sounds from './pages/Sounds'
import NotFound from './pages/NotFound'
import About from './pages/About'
import MainLayout from './layouts/MainLayout'
import Samples from './pages/Samples'
import { MusicPlayer } from './components/MusicPlayer/index'
import './App.css'
import { ToastContainer } from 'react-toastify'
import Admin from './pages/Admin'
import AdminOnlyRoute from './components/adminOnlyRoute/AdminOnlyRoute'
import { useSelector } from 'react-redux'
import License from './pages/License'
import Cart from './pages/Cart'
import CustomerOrders from './pages/CustomerOrders'

function App() {
  const { activeSong } = useSelector((state) => state.player)
  return (
    <>
      <BrowserRouter>
        <PayPalScriptProvider
          options={{
            'client-id':
              'AWH-8JatYVn7vQO1HRZb2smcdUzq14Q0JcPXhG6X28-1_DJP-YgPxFmVi_e-N_g2lhnXP8-NGCpAo3K2',
          }}
        >
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
                <Route path="licensing" element={<License />} />
                <Route path="cart" element={<Cart />} />
                <Route path="orders" element={<CustomerOrders />} />

                <Route
                  path="admin/*"
                  element={
                    <AdminOnlyRoute>
                      <Admin />
                    </AdminOnlyRoute>
                  }
                />

                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </div>
          {activeSong?.title && (
            <div className="fixed  h-24 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg  z-10">
              <MusicPlayer />
            </div>
          )}
        </PayPalScriptProvider>
      </BrowserRouter>
    </>
  )
}

export default App

// rounded-t-3xl
