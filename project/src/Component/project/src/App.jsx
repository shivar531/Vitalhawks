import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Component/navbar.jsx';
import Footer from './Component/Footer.jsx';
import PageLoader from './Component/Pageloader.jsx';
import ScrollToTop from './utils/ScrollToTop.jsx';

// Route-level code splitting: each page's JS loads only when visited,
// so the initial bundle (and first paint) is much smaller/faster.
const Home = lazy(() => import('./Component/Home'));
const Industries = lazy(() => import('./Component/Industries.jsx'));
const Contact = lazy(() => import('./Component/Contact.jsx'));
const Client = lazy(() => import('./Component/Client.jsx'));
const Pricing = lazy(() => import('./Component/Pricing.jsx'));
const Plan = lazy(() => import('./Component/Plan.jsx'));
const Popupform = lazy(() => import('./Component/Popupform.jsx'));
const SampleList = lazy(() => import('./Component/SampleList.jsx'));
const Privacy = lazy(() => import('./Component/Privacy.jsx'));
const Testimonials = lazy(() => import('./Component/Testimonials.jsx'));
const SignalHireAlternative = lazy(() => import('./Component/SignalHireAlternative.jsx'));
const RocketReachAlternative = lazy(() => import('./Component/RocketReachAlternative.jsx'));
const ZoomInfoAlternative = lazy(() => import('./Component/ZoomInfoAlternative.jsx'));
const LushaAlternative = lazy(() => import('./Component/LushaAlternative.jsx'));
const ApolloAlternative = lazy(() => import('./Component/ApolloAlternative.jsx'));
const FinancialServices = lazy(() => import('./Component/FinancialServices.jsx'));
const BusinessInsurance = lazy(() => import('./Component/BusinessInsurance.jsx'));
const Manufacturing = lazy(() => import('./Component/Manufacturing.jsx'));
const ProcurementDatabase = lazy(() => import('./Component/ProcurementDatabase.jsx'));
const HRDatabase = lazy(() => import('./Component/HRDatabase.jsx'));
const CEODatabase = lazy(() => import('./Component/CEODatabase.jsx'));
const CIODatabase = lazy(() => import('./Component/CIODatabase.jsx'));
const CFODatabase = lazy(() => import('./Component/CFODatabase.jsx'));
const RealEstate = lazy(() => import('./Component/RealEstate.jsx'));
const ITCompanies = lazy(() => import('./Component/ITCompanies.jsx'));
const Healthcare = lazy(() => import('./Component/Healthcare.jsx'));
const Pharmaceutical = lazy(() => import('./Component/Pharmaceutical.jsx'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />

        {/* PageLoader shows only while a page is genuinely loading —
            no fixed 500ms delay on every visit. */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Industries" element={<Industries />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Client" element={<Client />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Plan" element={<Plan />} />
            <Route path="/Popupform" element={<Popupform />} />
            <Route path="/SampleList" element={<SampleList />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/signalhire-alternative-india" element={<SignalHireAlternative />} />
            <Route path="/rocketreach-alternative-india" element={<RocketReachAlternative />} />
            <Route path="/zoominfo-alternative-india" element={<ZoomInfoAlternative />} />
            <Route path="/lusha-alternative-india" element={<LushaAlternative />} />
            <Route path="/apollo-alternative-india" element={<ApolloAlternative />} />
            <Route path="/financial-services" element={<FinancialServices />} />
            <Route path="/insurance-contact-data" element={<BusinessInsurance />} />
            <Route path="/manufacturing-database" element={<Manufacturing />} />
            <Route path="/procurement-head-database" element={<ProcurementDatabase />} />
            <Route path="/hr-director-database" element={<HRDatabase />} />
            <Route path="/ceo-database" element={<CEODatabase />} />
            <Route path="/cio-database" element={<CIODatabase />} />
            <Route path="/cfo-database" element={<CFODatabase />} />
            <Route path="/real-estate-database" element={<RealEstate />} />
            <Route path="/it-company-database" element={<ITCompanies />} />
            <Route path="/healthcare-database" element={<Healthcare />} />
            <Route path="/pharmaceutical-database" element={<Pharmaceutical />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
