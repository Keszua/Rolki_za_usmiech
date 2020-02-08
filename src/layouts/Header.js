import React from 'react';
import { Switch, Route  } from 'react-router-dom';
import img1 from '../images/baner-01.jpg';
import img2 from '../images/baner-02.jpg';
import img3 from '../images/baner-03.jpg';

//karuzela z: https://github.com/bitriddler/react-items-carousel
//import ItemsCarousel from 'react-items-carousel';

//karuzela ReactBootstrap
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
    return ( 
        <>
            
            <KaruzelaBootstrap/>

            {/* <Switch>
                <Route path="/" exact   render={() => ( <div> <WarsztatyPage/> </div> )}/>
                <Route path="/products" render={() => ( <img src={img2} alt="baner" /> )}/>
                <Route path="/warsztaty"  render={() => ( <WarsztatyPage/>  )}/>
                <Route path="/admin"    render={() => ( <img src={img3} alt="baner" /> )}/>
                <Route                  render={() => ( <img src={img3} alt="baner" /> )}/>
            </Switch> */}
        </>
     );
}

// const WarsztatyPage = () => {
//     return ( 
//         <>
//             <div>Nagłówek</div>
//             <KaruzelaBootstrap/>
//         </>
//      );
// }

function KaruzelaBootstrap() {
    return ( 

        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://lorempixel.com/output/cats-q-c-380-200-1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://placeimg.com/380/200/nature"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://placeimg.com/380/200/people"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}


// const KaruzelaC = () => {
//     const [activeItemIndex, setActiveItemIndex] = React.useState(0);
//     const chevronWidth = 40;
//     return (
//         <div style={{"padding":5,  "maxWidth":"1fr","margin":10}}>
        
//         <ItemsCarousel
//             containerWidth={'380px'}
//             infiniteLoop
//             gutter={12}
//             activePosition={'center'}
//             //chevronWidth={200}
//             //disableSwipe
//             //alwaysShowChevrons
//             numberOfCards={2}
//             slidesToScroll={1}
//             //outsideChevron
//             chevronWidth={chevronWidth}
//             //showSlither
//             //firstAndLastGutter
//             activeItemIndex={activeItemIndex}
//             requestToChangeActive={setActiveItemIndex}
//             leftChevron={<button>{'<'}</button>}
//             rightChevron={<button>{'>'}</button>}
//         >
//           <div key={1} style={{ height: 200, background: 'url(https://placeimg.com/380/200/nature)' }}>First card</div>
//           <div key={2} style={{ height: 200, background: 'url(https://placeimg.com/380/200/animals)' }}>Second card</div>
//           <div key={3} style={{ height: 200, background: 'url(https://placeimg.com/380/200/nature)' }}>Third card</div>
//           <div key={4} style={{ height: 200, background: 'url(https://placeimg.com/380/200/tech)' }}>Fourth card</div>
//         </ItemsCarousel>
        
//       </div>
//     );
// }


export default Header;