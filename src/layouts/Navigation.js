import React from 'react';
import '../css/style.css';
import { NavLink } from 'react-router-dom';
import Animated1 from '../components/Animated-mouse-mow';
import Animated2 from '../components/Animated-pageYOffset';

//import img1 from '../images/wheel3-640.png';
import img1 from '../svg/kolo1.svg';
import img_st from '../svg/kolo-start.svg';
import img_na from '../svg/kolo-nauka.svg';
import img_wa from '../svg/kolo-warsztaty.svg';

const list = [
    {name: "start",             img: img_st, dir: "right", path: "/", exact: true},
    {name: "Nauka jazdy",       img: img_na, dir: "right", path: "/nauka"},
    {name: "Warsztaty rolkowe", img: img_wa, dir: "right", path: "/warsztaty"},
    {name: "Zbiórka rolek",     img: img1,   dir: "right", path: "/zbiorka"},
    {name: "Pielgrzymka",       img: img1,   dir: "right", path: "/pielgrzymka"},
    //{name: "Gra miejska",     img: img1, dir: "right", path: "/gra"},
    //{name: "Rajdy",           img: img1, dir: "right", path: "/rajd"},
    {name: "Mapa rolkowa",      img: img1,   dir: "right", path: "/map"},
    {name: "Kontakt",           img: img1,   dir: "right", path: "/contact"},
    {name: "Panel admina",      img: img1,   dir: "right", path: "/admin"},
]

const Navigation = (props) => {

    let listShort = [];
    const LeftMenuCount = 4;
    if(props.position==='left') {
        listShort = list.slice(0, LeftMenuCount);
        listShort.forEach((el) => (el.dir = "left"));
    }
    else 
        listShort = list.slice(LeftMenuCount);

    const menu = listShort.map(item => (
        <li key={item.name}>
            {/* <NavLink to={item.path} activeClassName="news-selected">{item.name}</NavLink>  */}
            <div className="nav-link">
                <NavLink to={item.path} exact={item.exact} > 
                    <center>
                    {/* {item.name}  */}
                    <Animated2
                        className="wheel-1"
                        src={item.img}
                        direction={item.dir}
                    />
                    </center>
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