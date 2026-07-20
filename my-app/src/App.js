import './App.css';
import { Routes, Route } from "react-router-dom";


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



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CTASection />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <PetSection />
              <Team />
              <Statistics />
              <PostSection />
            </>
          }
        />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;