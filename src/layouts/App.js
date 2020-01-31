import React from 'react';
//import '../css/style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';



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
        {/* <section>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/news" component={News}/>
            <Route path="/contact" component={Contact}/>
            <Route component={ErrorPage}/>
          </Switch>
        </section> */}

      </div>
    </Router>
  );
}

export default App;
