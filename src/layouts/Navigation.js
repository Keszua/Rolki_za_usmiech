import React from 'react';
import '../css/style.css';
import { NavLink } from 'react-router-dom';


const list = [
    {name: "start", path: "/", exact: true},
    {name: "produkty", path: "/products"},
    {name: "kontakt", path: "/contact"},
    {name: "panel admina", path: "/admin"},
]

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            {/* <NavLink to={item.path} activeClassName="news-selected">{item.name}</NavLink>  */}
            <NavLink to={item.path} exact={item.exact} >{item.name}</NavLink> 
        </li>
    ))

    return ( 
        <nav className="navigation">
          <ul>
            {menu}
          </ul>
        </nav>      
    )
}
 
export default Navigation;