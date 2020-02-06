import React from 'react';
import { Switch, Route  } from 'react-router-dom';
import img1 from '../images/baner-01.jpg';
import img2 from '../images/baner-02.jpg';
import img3 from '../images/baner-03.jpg';



const Header = () => {
    return ( 
        <>
            <Switch>
                <Route path="/" exact   render={() => (  <img src={img1} alt="baner" /> )}/>
                <Route path="/products" render={() => ( <img src={img2} alt="baner" /> )}/>
                <Route path="/contact"  render={() => ( <img src={img1} alt="baner" /> )}/>
                <Route path="/admin"    render={() => ( <img src={img3} alt="baner" /> )}/>
                <Route                  render={() => ( <img src={img3} alt="baner" /> )}/>
            </Switch>
        </>
     );
}
 





export default Header;