import { useState } from 'react'

import './App.css';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'



import Navbar from './pages/Navbar';
import Header from './pages/Header'
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Blogpost from './pages/Blogpost';
import Programminglanguage from './pages/Blogpost/Programminglanguage';
import Scriptinglanguage from './pages/Blogpost/Scriptinglanguage';
import Markup from './pages/Blogpost/Markup';
import Blog from './pages/Blog';
import Productapi from './api/Bloger';
import Blogs from './pages/Blogs';
import Codingvsprogramming from './pages/Blogpost/Codingvsprogramming';
import Compiler from './pages/Blogpost/Compiler';


function App() {
 

  return (
    <>
     
     <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="AboutUs" element={<Aboutus />} />
        <Route path="Contact" element={<Contact />} />

        
      </Routes>
    
      
      <Footer />

    </>
  );
}

export default App;
