import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';


const Home = () => <h1>Strona startowa</h1>
const News = () => <h1>Aktualności</h1>
const Contact = () => <h1>Kontakt</h1>

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <nav>
          <ul>
            <li><NavLink to="/" exact activeClassName="home-selected"
                  activeStyle={{  //możliwość stylowania aktywnego elementu
                    backgroundColor: 'gray',
                    letterSpacing: '3px'
                  }}
                >Start</NavLink> </li>
            <li><NavLink to="/news" activeClassName="news-selected">Aktualnosci</NavLink> </li>
            <li><NavLink to="/contact" activeClassName="contact-selected">Kontakt</NavLink> </li>
          </ul>
        </nav>
        </header>

        <section>
          <Route path="/" exact component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/contact" component={Contact}/>
        </section>

      </div>
    </Router>
  );
}

export default App;
