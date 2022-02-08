import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/index.css';
import './css/port.css';
import './css/searchBar.css';
import './css/about.css';
import './css/navbar.css';
import './css/footer.css';
import './css/home.css';
import Home from './components/homePage/home';
import Port from './components/portPage/portfolio';
import About from './components/aboutPage/about';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ReactHeader from './components/reactHeader';

ReactDOM.render(
  <Router>
    <ReactHeader />
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/photography/portfolio" element={ <Port/> } />
      <Route path="/photography/about" element= { <About/> } />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
);

