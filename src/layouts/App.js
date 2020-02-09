import React from 'react';
import '../css/style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';


function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      
      <div className="main">
        <div className="top">
          <div className="top__nav navigation" >
            <nav className="top__nav--left" >
              <Navigation position="left"/>
            </nav>
            <nav className="top__nav--right">
              <Navigation position="right"/>
            </nav>
          </div> 
          <div className="top__header">
            <Header/>
          </div>
        </div>

        <div className="p_body">
          <nav className="navLeft navigation" >
            <Navigation position="left"/>
          </nav>
          <section  className="page">
            <Page/>
            {/* <footer className="footer">
              <Footer/>
            </footer> */}
          </section>
          <nav className="navRight navigation">
            <Navigation position="right"/>
          </nav>

        </div>
      </div>
    </Router>
  );
}

export default App;
