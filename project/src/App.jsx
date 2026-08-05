import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Component/navbar.jsx';
import Footer from './Component/Footer.jsx';
import PageLoader from './Component/Pageloader.jsx';
import ScrollToTop from './utils/ScrollToTop.jsx';

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
const FinancialServices = lazy(() => import('./Component/FinancialServices.jsx'));
const BusinessInsurance = lazy(() => import('./Component/BusinessInsurance.jsx'));
const Manufacturing = lazy(() => import('./Component/Manufacturing.jsx'));
const Pharmaceutical = lazy(() => import('./Component/Pharmaceutical.jsx'));
const Healthcare = lazy(() => import('./Component/Healthcare.jsx'));
const ITCompanies = lazy(() => import('./Component/ITCompanies.jsx'));
const RealEstate = lazy(() => import('./Component/RealEstate.jsx'));
const SaaSDatabase = lazy(() => import('./Component/SaaSDatabase.jsx'));
const CybersecurityDatabase = lazy(() => import('./Component/CybersecurityDatabase.jsx'));
const LogisticsDatabase = lazy(() => import('./Component/LogisticsDatabase.jsx'));
const CFODatabase = lazy(() => import('./Component/CFODatabase.jsx'));
const CIODatabase = lazy(() => import('./Component/CIODatabase.jsx'));
const CEODatabase = lazy(() => import('./Component/CEODatabase.jsx'));
const HRDatabase = lazy(() => import('./Component/HRDatabase.jsx'));
const ProcurementDatabase = lazy(() => import('./Component/ProcurementDatabase.jsx'));
const CMODatabase = lazy(() => import('./Component/CMODatabase.jsx'));
const SalesHeadDatabase = lazy(() => import('./Component/SalesHeadDatabase.jsx'));
const COODatabase = lazy(() => import('./Component/COODatabase.jsx'));
const ApolloAlternative = lazy(() => import('./Component/ApolloAlternative.jsx'));
const LushaAlternative = lazy(() => import('./Component/LushaAlternative.jsx'));
const ZoomInfoAlternative = lazy(() => import('./Component/ZoomInfoAlternative.jsx'));
const RocketReachAlternative = lazy(() => import('./Component/RocketReachAlternative.jsx'));
const SignalHireAlternative = lazy(() => import('./Component/SignalHireAlternative.jsx'));
const CognismAlternative = lazy(() => import('./Component/CognismAlternative.jsx'));
const SeamlessAlternative = lazy(() => import('./Component/SeamlessAlternative.jsx'));
const UpLeadAlternative = lazy(() => import('./Component/UpLeadAlternative.jsx'));
const KasprAlternative = lazy(() => import('./Component/KasprAlternative.jsx'));
const AmplizAlternative = lazy(() => import('./Component/AmplizAlternative.jsx'));
const ClearbitAlternative = lazy(() => import('./Component/ClearbitAlternative.jsx'));
const HunterAlternative = lazy(() => import('./Component/HunterAlternative.jsx'));
const SnovAlternative = lazy(() => import('./Component/SnovAlternative.jsx'));
const AdaptAlternative = lazy(() => import('./Component/AdaptAlternative.jsx'));
const NotFound = lazy(() => import('./Component/NotFound.jsx'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
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
            <Route path="/financial-services" element={<FinancialServices />} />
            <Route path="/insurance-contact-data" element={<BusinessInsurance />} />
            <Route path="/manufacturing-database" element={<Manufacturing />} />
            <Route path="/pharmaceutical-database" element={<Pharmaceutical />} />
            <Route path="/healthcare-database" element={<Healthcare />} />
            <Route path="/it-company-database" element={<ITCompanies />} />
            <Route path="/real-estate-database" element={<RealEstate />} />
            <Route path="/saas-companies-database" element={<SaaSDatabase />} />
            <Route path="/cybersecurity-companies-database" element={<CybersecurityDatabase />} />
            <Route path="/logistics-database" element={<LogisticsDatabase />} />
            <Route path="/cfo-database" element={<CFODatabase />} />
            <Route path="/cio-database" element={<CIODatabase />} />
            <Route path="/ceo-database" element={<CEODatabase />} />
            <Route path="/hr-director-database" element={<HRDatabase />} />
            <Route path="/procurement-head-database" element={<ProcurementDatabase />} />
            <Route path="/cmo-database" element={<CMODatabase />} />
            <Route path="/sales-head-database" element={<SalesHeadDatabase />} />
            <Route path="/coo-database" element={<COODatabase />} />
            <Route path="/apollo-alternative-india" element={<ApolloAlternative />} />
            <Route path="/lusha-alternative-india" element={<LushaAlternative />} />
            <Route path="/zoominfo-alternative-india" element={<ZoomInfoAlternative />} />
            <Route path="/rocketreach-alternative-india" element={<RocketReachAlternative />} />
            <Route path="/signalhire-alternative-india" element={<SignalHireAlternative />} />
            <Route path="/cognism-alternative-india" element={<CognismAlternative />} />
            <Route path="/seamless-ai-alternative-india" element={<SeamlessAlternative />} />
            <Route path="/uplead-alternative-india" element={<UpLeadAlternative />} />
            <Route path="/kaspr-alternative-india" element={<KasprAlternative />} />
            <Route path="/ampliz-alternative-india" element={<AmplizAlternative />} />
            <Route path="/clearbit-alternative-india" element={<ClearbitAlternative />} />
            <Route path="/hunter-alternative-india" element={<HunterAlternative />} />
            <Route path="/snov-io-alternative-india" element={<SnovAlternative />} />
            <Route path="/adapt-io-alternative-india" element={<AdaptAlternative />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
