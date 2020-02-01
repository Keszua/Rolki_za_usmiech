import React from 'react';
import '../css/style.css';
import { NavLink } from 'react-router-dom';


const list = [
    {name: "start", path: "/", exact: true},
    {name: "produkty", path: "/products"},
    {name: "kontakt", path: "/contact"},
    {name: "panel admina", path: "/admin"},
]

const Navigation = (props) => {

    let listShort = [];
    const LeftMenuCount = 2;
    if(props.position==='left') 
        listShort = list.slice(0, LeftMenuCount);
    else 
        listShort = list.slice(LeftMenuCount);

    const menu = listShort.map(item => (
        <li key={item.name}>
            {/* <NavLink to={item.path} activeClassName="news-selected">{item.name}</NavLink>  */}
            <NavLink to={item.path} exact={item.exact} >{item.name}</NavLink> 
        </li>
    ))
    // const menuL = menu.slice(0, LeftMenuCount);
    // const menuR = menu.slice(LeftMenuCount);
    //console.log(menu);
    console.log(menu);

    console.log(props.position);

    return (
        <>
            <nav>
                <ul>
                {/* { (props.position==='left') ? menuL : menuR  } */}
                {menu}
                </ul>
            </nav>      
      </>     
  )
}
 
export default Navigation;