import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Component/navbar.jsx';
import Home from './Component/Home';  
import Industries from './Component/Industries.jsx';  
import Contact from './Component/Contact.jsx';  
import Client from './Component/Client.jsx'; 
import Footer from './Component/Footer.jsx'; 
import Pricing from "./Component/Pricing.jsx";
import Plan from "./Component/Plan.jsx";
import SampleList from './Component/SampleList.jsx';
import PageLoader from "./Component/Pageloader.jsx";

import Popupform from "./Component/Popupform.jsx";
import ScrollToTop from './utils/ScrollToTop.jsx';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // ⏱ loader duration

    return () => clearTimeout(timer);
  }, []);

  // 🔥 Show loader first
  if (loading) {
    return <PageLoader />;
  }

  // ✅ Show actual app after loading
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Industries" element={<Industries />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Plan" element={<Plan />} />
          <Route path="/Popupform" element={<Popupform />} />
          <Route path="/SampleList" element={<SampleList />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;