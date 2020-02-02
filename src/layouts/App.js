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
        <header className="main__header">
          <Header/>
        </header>

        <nav className="main__navLeft navigation" >
          <Navigation position="left"/>
        </nav>
        <nav className="main__navRight navigation">
          <Navigation position="right"/>
        </nav>
        <section  className="main__page">
          <Page/>
        </section>

        <footer className="main__footer">
          <Footer/>
        </footer>
      </div>
    </Router>
  );
}

export default App;
