/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PriceList from './components/PriceList';
import CustomOrder from './components/CustomOrder';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/price-list" element={<PriceList />} />
          <Route path="/custom-orders" element={<CustomOrder />} />
          <Route path="/location" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
