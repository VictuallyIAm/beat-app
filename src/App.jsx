import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Beats from './components/Beats'
import SingleBeat from './components/SingleBeat'
import Contacts from './components/Contacts'
import Drumkits from './components/Drumkits'
import SingleDrumkit from './components/SingleDrumkit'
import Sounds from './components/Sounds'
import SingleSound from './components/SingleSound'
import NotFound from './components/NotFound'
import About from './components/About'
import MainLayout from './layouts/MainLayout'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="about" element={<About />} />
            <Route index element={<Beats />} />
            <Route path="beats/:slug" element={<SingleBeat />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="drumkits" element={<Drumkits />} />
            <Route path="drumkits/:slug" element={<SingleDrumkit />} />
            <Route path="sounds" element={<Sounds />} />
            <Route path="sounds/:slug" element={<SingleSound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
