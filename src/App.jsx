import React from 'react'
import Header from './Components/Header/Header'
import './index.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import ContactUs from './Pages/ContactUs/ContactUs'
import AboutUs from './Pages/AboutUs/AboutUs'
import Gallery from './Pages/Gallery'
import Testimonials from './Pages/Testimonials'
import ElectricalInstallation from './Pages/ElectricalInstallation/ElectricalInstallation'
import EmergencyLighting from './Pages/EmergencyLighting/EmergencyLighting';
import ServicesOverview from './Pages/ServicesOverview/ServicesOverview'
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<ServicesOverview />}>
            {/* <Route path="web" element={<Home />} />
          <Route path="mobile" element={<Home />} />
          <Route path="consulting" element={<Home />} /> */}
          </Route>
          <Route path="services/electrical-installations" element={<ElectricalInstallation />} />
          <Route path="services/emergency-lighting" element={<EmergencyLighting />} />
          <Route path="portfolio" element={<Gallery />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App