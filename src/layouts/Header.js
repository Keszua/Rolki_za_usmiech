import React from 'react';
import { Switch, Route  } from 'react-router-dom';
// import img1 from '../images/baner-01.jpg';
// import img2 from '../images/baner-02.jpg';
import img3 from '../images/baner-03.jpg';

//kolejna karuzela z: https://github.com/bitriddler/react-items-carousel
//import ItemsCarousel from 'react-items-carousel';
//import styled from 'styled-components';

//karuzela ReactBootstrap
//import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.css";

import imgNeu1 from '../images/baner01.png';
import imgNeu2 from '../images/baner02.jpg';
import imgNeu3 from '../images/baner03.jpg';

import imgNau1 from '../images/baner11.jpg';
import imgNau2 from '../images/baner12.jpg';
import imgNau3 from '../images/baner01.png';

import imgWar1 from '../images/baner02.jpg';


const informacje = {
    start: [
        {id:1, img:imgNeu1, txt:""}, 
        {id:2, img:imgNeu2, txt:""},
        {id:3, img:imgNeu3, txt:""},
    ],
    nauka: [
        {id:1, img:imgNau1, txt:""}, 
        {id:2, img:imgNau2, txt:""},
        {id:3, img:imgNau3, txt:""},
    ],
    warsztaty: [
        {id:1, img:imgWar1, txt:""}, 
        {id:2, img:imgNeu2, txt:""},
        {id:3, img:imgNeu3, txt:""},
    ],
    zbiorka: [
        {id:1, img:imgNeu1, txt:""}, 
        {id:2, img:imgNeu2, txt:""},
        {id:3, img:imgNeu3, txt:""},
    ],
    pielgrzymka: [
        {id:1, img:imgNeu1, txt:""}, 
        {id:2, img:imgNeu2, txt:""},
        {id:3, img:imgNeu3, txt:""},
    ],
    mapa: [
        {id:1, img:imgNeu1, txt:""}, 
        {id:2, img:imgNeu2, txt:""},
        {id:3, img:imgNeu3, txt:""},
    ],
    kontakt: [
        {id:1, img:imgNeu1, txt:""}, 
        {id:2, img:imgNeu2, txt:""},
        {id:3, img:imgNeu3, txt:""},
    ],
    admin: {},
}

const Header = () => {
    return ( 
        <>
            {/* <KaruzelaBootstrap item={informacje.start}/> */}
            <Switch>
                <Route path="/" exact    render={() => ( <KaruzelaBootstrap item={informacje.start}/> )}/>
                <Route path="/nauka"     render={() => ( <KaruzelaBootstrap item={informacje.nauka}/> )}/>
                <Route path="/warsztaty" render={() => ( <KaruzelaBootstrap item={informacje.nauka}/> )}/>
                <Route path="/admin"     render={() => ( <KaruzelaBootstrap item={informacje.nauka}/> )}/>
                <Route                   render={() => (   <img src={img3} alt="baner" /> )}/>
            </Switch>
        </>
     );
}


function KaruzelaBootstrap(props) {

    const caruselItems = props.item.map(el => (
        <Carousel.Item key={el.id}>
            <img
                className="d-block w-100"
                src={el.img}
                alt="slide"
            />
            <Carousel.Caption variant='success'>
            <h3 style={{color: 'black', textShadow: '0px 0px 3px rgb(255, 255, 255)', textOverflow: 'inherit' }}><b>{el.txt}</b></h3>
            <p>{el.txt}</p>
            </Carousel.Caption>
        </Carousel.Item>
    ))

    return ( 
        <Carousel>
                {caruselItems}
        </Carousel>
    );
}


// function KaruzelaBootstrap2() {
//     return ( 
//         // <div style={{"padding":5, height:"400px",  "maxWidth":"100%","margin":10}}>
//             <Carousel>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src={imgNeu1}
//                         alt="First slide"
//                     />
//                     <Carousel.Caption variant='success'>
//                     <h1 style={{color: 'green'}}> </h1>
//                     {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src={imgNeu2}
//                         alt="Second slide"
//                     />
//                     <Carousel.Caption>
//                     <h3 style={{color: 'black', textShadow: '0px 0px 3px rgb(255, 255, 255)', textOverflow: 'inherit' }}><b>Trenuj razem z przyjaciółmi</b></h3>
//                     {/* <p style={{color: 'green'}}>Trenuj w grupie.</p> */}
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src={imgNeu1}
//                         alt="Second slide"
//                     />
//                     <Carousel.Caption>
//                     <h3 style={{color: 'khaki', textShadow: '0px 0px 3px rgb(0, 0, 0)'}}><b>Jazda rodzinna</b></h3>
//                     {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>
//         // </div>
//     );
// }


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