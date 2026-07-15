import './App.css';
import { Routes, Route } from "react-router-dom";


import Footer from './component/Footer';
import PetSection from './pages/PetSection';
import Team from './pages/Team';
import Statistics from './pages/Statistics';
import PostSection from './pages/PostSection';



function App() {
  return (
    <div className="App">

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