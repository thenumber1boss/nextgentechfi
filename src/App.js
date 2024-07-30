// src/App.js

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import SummerBootcamp from './pages/events/summer-bootcamp/summer-bootcamp.jsx';
import LandingPage from './pages/landing-page/landing-page.jsx';
import PersonalInformation from './components/forms/bootcamp-reg-form/personal-information-form.jsx';
import SuccessfulPayment from './components/forms/bootcamp-reg-form/successful-payment.jsx';
import CompleteRegistration1 from './components/forms/bootcamp-reg-form/complete-registration1.jsx';
import { ScrollToTop } from "./utility.js";
import usePageTracking from './hooks/usePageTracking';
import useMetaPixelTracking from './hooks/useMetaPixelTracking';
import { Analytics } from '@vercel/analytics/react';
import InsertAffiliates from './components/affiliates/insert-affiliates.jsx';

function App() {
  usePageTracking();
  useMetaPixelTracking();
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bootcamp" element={<SummerBootcamp />} />
        <Route path="/summer-bootcamp" element={<Navigate to="/bootcamp" />} />
        <Route path="/register" element={<PersonalInformation />} />
        <Route path="/register-affiliates" element={<InsertAffiliates />} />
        <Route path="/successful-payment" element={<SuccessfulPayment />} />
        <Route path="/complete-registration1" element={<CompleteRegistration1 />} />
        {/* Add more routes here as needed */}
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;
