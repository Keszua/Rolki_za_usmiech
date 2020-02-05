import React, {Component, useRef, useEffect} from 'react';
import '../css/style.css';
import { NavLink } from 'react-router-dom';
import Animated1 from '../components/Anim-mouse-mow';
import Animated2 from '../components/Anim-pageYOffset';
import AnimRotateLoop from '../components/Anim-rotate_loop';

import { TweenMax, TimelineMax, Power3 } from 'gsap';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';



//import img1 from '../images/wheel3-640.png';
import img_01 from '../svg/kolo1.svg';
import img_st from '../svg/__kolo1-START-01.svg';
import img_na from '../svg/__kolo1-NAUKA.svg';
import img_wa from '../svg/__kolo1-WARSZTATY.svg';
import img_zb from '../svg/__kolo1-ZBIORKA.svg';
import img_pi from '../svg/__kolo1-PIELGRZYMKA.svg';
import img_ma from '../svg/__kolo1-MAPA.svg';
import img_ko from '../svg/__kolo1-KONTAKT.svg';
import img_pa from '../svg/__kolo1-PANEL.svg';




const list = [
    {name: "start",             img: img_st, dir: "right", path: "/", exact: true},
    {name: "Nauka jazdy",       img: img_na, dir: "right", path: "/nauka"},
    {name: "Warsztaty rolkowe", img: img_wa, dir: "right", path: "/warsztaty"},
    {name: "Zbiórka rolek",     img: img_zb, dir: "right", path: "/zbiorka"},
    //{name: "Pielgrzymka",       img: img_pi, dir: "right", path: "/pielgrzymka"},
    {name: "Gra miejska",       img: img_01, dir: "right", path: "/gra"},
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
    else 
        listShort = list.slice(LeftMenuCount);

    const menu = listShort.map(item => (



//            <NavLink to={item.path} activeClassName="news-selected">{item.name}</NavLink> 
            <div className="nav-link">
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
                <AnimRotateLoop  />
            </>     
        );
    }
}
 


// const Navigation = (props) => {

// //-------------------------
// //Poczytać na : https://www.npmjs.com/package/react-gsap
// //Obejżeć https://www.youtube.com/watch?v=_-YfoAzIDzw
//     let logoItem = useRef('hello')
//     // useEffect(() => {
//     //   console.log("LogoItem:",logoItem);
//     //   //logoItem.style.display='none'; //efekt znikniecia 
//     //   TweenMax.to(logoItem, 3, {x:100, ease: Power3.easeOut})
//     // }, [])
// //---------------------------

//     let listShort = [];
//     const LeftMenuCount = 4;
//     if(props.position==='left') {
//         listShort = list.slice(0, LeftMenuCount);
//         listShort.forEach((el) => (el.dir = "left"));
//     }
//     else 
//         listShort = list.slice(LeftMenuCount);

//     const menu = listShort.map(item => (
//         <li key={item.name}>
//             {/* <NavLink to={item.path} activeClassName="news-selected">{item.name}</NavLink>  */}
//             <div className="nav-link">
//                 <NavLink to={item.path} exact={item.exact} > 
//                     {/* <center> */}
//                     {/* {item.name}  */}
//                     <Animated2
//                         className="wheel-1"
//                         src={item.img}
//                         direction={item.dir}
//                     />
//                     {/* </center> */}
//                 </NavLink> 
//             </div>
//         </li>
//     ))

//     return (
//       <>

// {/* --------------------------- */}
//         <img 
//           ref={el => {logoItem = el}}
//             //src={img_1}
//         alt="" />
// {/* --------------------------- */}

//         <nav>
//         {/* <MenuRoundedIcon style={{ color: green[500] }} /> */}
//             <MenuRoundedIcon color="primary" />
        
        
//           <ul>
//             {menu}
//           </ul>
//         </nav>    
//         <AnimRotateLoop  />
//       </>     
//   )
// }
 
export default Navigation;