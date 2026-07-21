import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";

import Footer from './component/Footer';
import PetSection from './pages/PetSection';
import Team from './pages/Team';
import Statistics from './pages/Statistics';
import PostSection from './pages/PostSection';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import AboutSection from './component/AboutSection';
import ServicesSection from './component/ServicesSection';
import CTASection from './component/CTASection';

// Automatically scrolls window to top when changing routes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Full Home Page View */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutSection />
              <ServicesSection />
              <CTASection />
              <PetSection />
              <Team />
              <Statistics />
              <PostSection />
            </>
          }
        />

        {/* Dedicated About Page */}
        <Route
          path="/about"
          element={
            <main style={{ minHeight: '70vh' }}>
              <AboutSection />
              <Team />
              <Statistics />
            </main>
          }
        />

        {/* Dedicated Services Page */}
        <Route
          path="/service"
          element={
            <main style={{ minHeight: '70vh' }}>
              <ServicesSection />
              <PetSection />
            </main>
          }
        />

        {/* Dedicated Adoption & Pets Page */}
        <Route
          path="/pets"
          element={
            <main style={{ minHeight: '70vh' }}>
              <PetSection />
            </main>
          }
        />

        {/* Dedicated Contact Page */}
        <Route
          path="/contact"
          element={
            <main style={{ minHeight: '70vh' }}>
              <CTASection />
            </main>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;