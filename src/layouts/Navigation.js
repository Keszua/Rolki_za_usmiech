import React, {Component } from 'react';
import '../css/style.css';
import { NavLink } from 'react-router-dom';
//import Animated1 from '../components/Anim-mouse-mow';
import Animated2 from '../components/Anim-pageYOffset';
//import MenuRoundedIcon from '@material-ui/icons/MenuRounded';


//import img1 from '../images/wheel3-640.png';
//import img_01 from '../svg/kolo1.svg';
import img_st from '../svg/kolo1-START-01.svg';
import img_na from '../svg/kolo1-NAUKA.svg';
import img_wa from '../svg/kolo1-WARSZTATY.svg';
import img_zb from '../svg/kolo1-ZBIORKA.svg';
import img_pi from '../svg/kolo1-PIELGRZYMKA.svg';
import img_ma from '../svg/kolo1-MAPA.svg';
import img_ko from '../svg/kolo1-KONTAKT.svg';
import img_pa from '../svg/kolo1-PANEL.svg';
import img_gra_miejska from '../svg/kolo1-GRA_MIEJSKA.svg';




const list = [
    {name: "start",             img: img_st, dir: "right", path: "/", exact: true},
    {name: "Nauka jazdy",       img: img_na, dir: "right", path: "/nauka"},
    {name: "Warsztaty rolkowe", img: img_wa, dir: "right", path: "/warsztaty"},
    {name: "Zbiórka rolek",     img: img_zb, dir: "right", path: "/zbiorka"},
    //{name: "Pielgrzymka",       img: img_pi, dir: "right", path: "/pielgrzymka"},
    {name: "Gra miejska",       img: img_gra_miejska, dir: "right", path: "/gra"},
    //{name: "Rajdy",             img: img_ra, dir: "right", path: "/rajd"},
    {name: "Mapa rolkowa",      img: img_ma, dir: "right", path: "/map"},
    {name: "Kontakt",           img: img_ko, dir: "right", path: "/contact"},
    {name: "Panel admina",      img: img_pa, dir: "right", path: "/admin"},
]

class Navigation extends Component {
    state = { 
        widthSize: 0,
    }
        
    render() { 
        let listShort = [];
        const LeftMenuCount = 4;
        if(this.props.position==='left') {
            listShort = list.slice(0, LeftMenuCount);
            listShort.forEach((el) => (el.dir = "left"));
        }
        else if (this.props.position==='right') {
            listShort = list.slice(LeftMenuCount);
        }
        else  
            listShort = list;
        

        const menu = listShort.map(item => (
            //<NavLink to={item.path} activeClassName="news-selected">{item.name}</NavLink> 
            <div key={item.name} className="nav-link">
                <NavLink to={item.path} exact={item.exact} > 
                    {/* <center> */}
                    {/* {item.name}  */}
                    <Animated2
                        className="wheel-1"
                        src={item.img}
                        direction={item.dir}
                    />
                    {/* </center> */}
                </NavLink> 
            </div>
        ))

        return ( 
            <>
                {/* <MenuRoundedIcon color="primary"   className={this.props.position==='left' ? "nav-link__left-m-icon" : "nav-link__right-m-icon"} /> */}
                {menu}
            </>     
        );
    }
}
 
export default Navigation;