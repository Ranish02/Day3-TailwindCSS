import React from 'react';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Tiers from './Tiers';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Dashboard />
      <Newsletter />
      <Tiers />
      <Footer />
    </div>
  );
}

export default App;
