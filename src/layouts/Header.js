import React from 'react';
import { Switch, Route  } from 'react-router-dom';
import img1 from '../images/baner-01.jpg';
import img2 from '../images/baner-02.jpg';
import img3 from '../images/baner-03.jpg';

//kolejna karuzela z: https://github.com/bitriddler/react-items-carousel
//import ItemsCarousel from 'react-items-carousel';
//import styled from 'styled-components';

//karuzela ReactBootstrap
//import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.css";

import imgSta1 from '../images/baner01.png';
import imgSta2 from '../images/baner02.jpg';
import imgSta3 from '../images/baner03.jpg';

import imgNau1 from '../images/baner02.jpg';
import imgWar1 from '../images/baner-03.jpg';


const informacje = {
    start: { },
    nauka: { },
    warsztaty: {},
    zbiorka: { },
    pielgrzymka: {},
    mapa: {},
    kontakt: {},
    admin: {},
}

const Header = () => {
    return ( 
        <>
            <KaruzelaBootstrap/>
            {/* <Switch>
                <Route path="/" exact   render={() => (  <KaruzelaBootstrap/> )}/>
                <Route path="/products" render={() => ( <img src={img2} alt="baner" /> )}/>
                <Route path="/contact"  render={() => ( <img src={img1} alt="baner" /> )}/>
                <Route path="/admin"    render={() => ( <img src={img3} alt="baner" /> )}/>
                <Route                  render={() => ( <img src={img3} alt="baner" /> )}/>
            </Switch> */}
        </>
     );
}


function KaruzelaBootstrap() {
    return ( 
        // <div style={{"padding":5, height:"400px",  "maxWidth":"100%","margin":10}}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgSta1}
                        alt="First slide"
                    />
                    <Carousel.Caption variant='success'>
                    <h1 style={{color: 'green'}}> </h1>
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgSta2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 style={{color: 'black', textShadow: '0px 0px 3px rgb(255, 255, 255)', textOverflow: 'inherit' }}><b>Trenuj razem z przyjaciółmi</b></h3>
                    {/* <p style={{color: 'green'}}>Trenuj w grupie.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgSta3}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 style={{color: 'yellowgreen', textShadow: '1px 1px 6px rgb(0, 0, 0)'}}><b>Jazda rodzinna</b></h3>
                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        // </div>
    );
}


//const chevronWidth = 40;

// const Wrapper = styled.div`
// padding: 0 ${chevronWidth}px;
// max-width: 100vw;
// margin: 10px auto;
// `;

// const KaruzelaC = () => {
//     const imgHeight = 400;
//     const [activeItemIndex, setActiveItemIndex] = useState(0);
//     const chevronWidth = 10;
//     return (
//         <div style={{"padding":5, height:"400px",  "maxWidth":"100%","margin":10}}>
//         {/* <Wrapper> */}
//             <ItemsCarousel
//                 // containerWidth={'380px'}
//                 infiniteLoop
//                 gutter={12}
//                 activePosition={'center'}
//                 //chevronWidth={3} //rozsunięcie przycisków
//                 chevronWidth={chevronWidth}
//                 //disableSwipe
//                 //alwaysShowChevrons //zawsze pokazuj przyciski
//                 numberOfCards={1}
//                 slidesToScroll={1}
//                 outsideChevron
//                 //showSlither //pokazuj granice (pusta przestrzen pomiedzy)
//                 //firstAndLastGutter
//                 activeItemIndex={activeItemIndex}
//                 requestToChangeActive={setActiveItemIndex}
//                 leftChevron={<button>{'<'}</button>}
//                 rightChevron={<button>{'>'}</button>}
//             >
//             <div key={1} style={{ height: imgHeight, background: '#EEE no-repeat' }}> <img src="../images/baner-01.jpg" alt="baner" /> </div>
//             <div key={2} style={{ height: imgHeight, background: {img3} }}> Tekst 2 </div>
//             <div key={3} style={{ height: imgHeight, background: 'url(https://placeimg.com/380/200/nature) no-repeat' }}>Third card</div>
//             <div key={4} style={{ height: imgHeight, background: 'url(https://placeimg.com/380/200/tech) no-repeat' }}>Fourth card</div>
//             </ItemsCarousel>
//         {/* </Wrapper> */}
//       </div>
//     );
// }


export default Header;