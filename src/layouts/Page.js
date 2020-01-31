import React from 'react';
import { Switch, Route  } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import NewsPage from '../pages/NewsPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import AdminPage from '../pages/AdminPage';


const Page = () => {
    return ( 
        <>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/products" component={ProductPage}/>
            <Route path="/news" component={NewsPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/admin" component={AdminPage}/>
            <Route component={ErrorPage}/>
          </Switch>
        </>

        );
}
 
export default Page;