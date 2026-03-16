import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import DisclaimerModal from './components/DisclaimerModal';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programme from './pages/Programme';
import Patrons from './pages/Patrons';
import Partners from './pages/Partners';
import Institutional from './pages/Institutional';
import Impact from './pages/Impact';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import ShopPage from './pages/ShopPage';
import CollectionHome from './pages/CollectionHome';
import ChrisLeeCollection from './pages/ChrisLeeCollection';
import About from './pages/About';
import Artists from './pages/Artists';
import ArtistCV from './pages/ArtistCV';
import Invest from './pages/Invest';
import FAQ from './pages/FAQ';
import SoldArchive from './pages/SoldArchive';
import PrivacyPolicy from './pages/PrivacyPolicy';
import GDPRPolicy from './pages/GDPRPolicy';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="App">
      <DisclaimerModal />
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artist-cv" element={<ArtistCV />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/about" element={<About />} />
          <Route path="/patrons" element={<Patrons />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/institutional" element={<Institutional />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<CollectionHome />} />
          <Route path="/collection/natasha-kissell" element={<Shop />} />
          <Route path="/collection/chris-lee" element={<ChrisLeeCollection />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sold-archive" element={<SoldArchive />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/gdpr-policy" element={<GDPRPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;