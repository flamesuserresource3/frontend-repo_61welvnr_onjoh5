import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BookSection from './components/BookSection';
import Contact from './components/Contact';

const Header = () => (
  <header className="fixed top-0 inset-x-0 z-20 backdrop-blur bg-white/60 border-b border-slate-200/60">
    <div className="container mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" className="text-slate-900 font-semibold">Dr. Seth Meyers</a>
      <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#services" className="hover:text-blue-600">Services</a>
        <a href="#book" className="hover:text-blue-600">Book</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
        <a href="mailto:appointments@drsethmeyers.com" className="rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-medium">Book Now</a>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="border-t border-slate-200 bg-white">
    <div className="container mx-auto px-6 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>© {new Date().getFullYear()} Dr. Seth Meyers. All rights reserved.</div>
      <div className="flex items-center gap-4">
        <a href="#contact" className="hover:text-blue-600">Contact</a>
        <a href="#services" className="hover:text-blue-600">Services</a>
        <a href="#about" className="hover:text-blue-600">About</a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <BookSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
