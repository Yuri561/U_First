import React from 'react';
import  './App.css';
import Header from './components/Header/header';
import Hero  from './components/Hero/hero';
import Vendors from   './components/Vendors/vendors';
import Residential from './components/Residential/residential';
import Value from './components/Value/value';
import Contact from './components/Contact/contact';
import GetStarted from './components/GetStarted/getStarted';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className='App'>
      <div>
        <div className="white-gradient"></div>
      <Header />
      <Hero/>
      </div>
      <Vendors />
      <Residential />
      <Value />
      <Contact />
      <GetStarted />
      <Footer/> 

    
    </div>
  );
}


export default App;

