import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import HowItWorksPage from './pages/HowItWorksPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import AboutOurPlayersPage from './pages/AboutOurPlayersPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import TermsPage from './pages/TermsPage.jsx';
import DictionaryPage from './pages/DictionaryPage.jsx';

function CanonicalTag() {
  const { pathname } = useLocation();
  useEffect(() => {
    let tag = document.querySelector('link[rel="canonical"]');
    if (!tag) {
      tag = document.createElement('link');
      tag.setAttribute('rel', 'canonical');
      document.head.appendChild(tag);
    }
    tag.setAttribute('href', `https://jumble.best${pathname}`);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <CanonicalTag />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-our-players" element={<AboutOurPlayersPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/dictionary" element={<DictionaryPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center px-4">
              <h1 className="hero-heading text-6xl font-bold text-foreground mb-4">404</h1>
              <p className="body-text text-xl text-muted-foreground mb-8">Page not found</p>
              <a href="/" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200">
                Back to Home
              </a>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
