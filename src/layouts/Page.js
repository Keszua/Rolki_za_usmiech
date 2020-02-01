import React from 'react';
import { Switch, Route  } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NewsPage from '../pages/NewsPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import AdminPage from '../pages/AdminPage';
import LoginPage from '../pages/LoginPage';

import GamePage from '../pages/GamePage';
import MapPage from '../pages/MapPage';
import NaukaPage from '../pages/NaukaPage';
import PielgrzymkaPage from '../pages/PielgrzymkaPage';
import RajdPage from '../pages/RajdPage';
import WarsztatyPage from '../pages/WarsztatyPage';
import ZbiorkaPage from '../pages/ZbiorkaPage';


const Page = () => {
    return ( 
        <>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/news" component={NewsPage}/>
            <Route path="/nauka" component={NaukaPage}/>
            <Route path="/warsztaty" component={WarsztatyPage}/>
            <Route path="/zbiorka" component={ZbiorkaPage}/>
            <Route path="/pielgrzymka" component={PielgrzymkaPage}/>
            <Route path="/gra" component={GamePage}/>
            <Route path="/rajd" component={RajdPage}/>
            <Route path="/map" component={MapPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/admin" component={AdminPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route component={ErrorPage}/>
          </Switch>
        </>

        );
}
 
export default Page;