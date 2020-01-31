import React from 'react';
import '../css/style.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

const Home = () => <h1>Strona startowa</h1>
const News = () => <h1>Aktualności</h1>
const Contact = () => <h1>Kontakt</h1>
const ErrorPage = () => <h1>Strona nie istnieje (error: 404)</h1>


function App() {
  return (
    <Router>
      <div className="app">
        <header className="App-header">
          {<Header/>}
        </header>

        <main>
          <aside>
            {<Navigation/>}
          </aside>
          <section className="page">
            <Page/>
          </section>
        </main>
        <footer> {<Footer/>} </footer>
        <section>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/news" component={News}/>
            <Route path="/contact" component={Contact}/>
            <Route component={ErrorPage}/>
          </Switch>
        </section>

      </div>
    </Router>
  );
}

export default App;
