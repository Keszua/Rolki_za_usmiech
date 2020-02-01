import React from 'react';
import '../css/style.css';
import { NavLink } from 'react-router-dom';
import Animated1 from '../components/Animated-mouse-mow';
import Animated2 from '../components/Animated-pageYOffset';
import img1 from '../images/wheel2-640.png';

const list = [
    {name: "start", path: "/", exact: true},
    {name: "Nauka jazdy", path: "/nauka"},
    {name: "Warsztaty rolkowe", path: "/warsztaty"},
    {name: "Zbiórka rolek", path: "/zbiorka"},
    {name: "Pielgrzymka", path: "/pielgrzymka"},
    //{name: "Gra miejska", path: "/gra"},
    //{name: "Rajdy", path: "/rajd"},
    {name: "Mapa rolkowa", path: "/map"},
    {name: "Kontakt", path: "/contact"},
    {name: "Panel admina", path: "/admin"},
]

const Navigation = (props) => {

    let listShort = [];
    const LeftMenuCount = 4;
    if(props.position==='left') 
        listShort = list.slice(0, LeftMenuCount);
    else 
        listShort = list.slice(LeftMenuCount);

    const menu = listShort.map(item => (
        <li key={item.name}>
            {/* <NavLink to={item.path} activeClassName="news-selected">{item.name}</NavLink>  */}
            <div className="nav-link">
                <NavLink to={item.path} exact={item.exact} >{item.name}
                    <Animated2
                        className="wheel-1"
                        src={img1}
                    />
                </NavLink> 
            </div>
        </li>
    ))

    return (
        <>
            <nav>
                <ul>
                    {menu}
                </ul>
            </nav>      
      </>     
  )
}
 
export default Navigation;