import React, { useState }  from 'react';
import { Switch, Route  } from 'react-router-dom';
import img1 from '../images/baner-01.jpg';
import img2 from '../images/baner-02.jpg';
import img3 from '../images/baner-03.jpg';

//kolejna karuzela z: https://github.com/bitriddler/react-items-carousel
import ItemsCarousel from 'react-items-carousel';
import styled from 'styled-components';


const Header = () => {
    return ( 
        <>
            <Switch>
                <Route path="/" exact   render={() => (  <div> <KaruzelaC/> </div> )}/>
                <Route path="/products" render={() => ( <img src={img2} alt="baner" /> )}/>
                <Route path="/contact"  render={() => ( <img src={img1} alt="baner" /> )}/>
                <Route path="/admin"    render={() => ( <img src={img3} alt="baner" /> )}/>
                <Route                  render={() => ( <img src={img3} alt="baner" /> )}/>
            </Switch>
        </>
     );
}

const chevronWidth = 40;

const Wrapper = styled.div`
padding: 0 ${chevronWidth}px;
max-width: 100vw;
margin: 10px auto;
`;

const KaruzelaC = () => {
    const imgHeight = 400;
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 10;
    return (
        <div style={{"padding":5, height:"400px",  "maxWidth":"100%","margin":10}}>
        {/* <Wrapper> */}
            <ItemsCarousel
                // containerWidth={'380px'}
                infiniteLoop
                gutter={12}
                activePosition={'center'}
                //chevronWidth={3} //rozsunięcie przycisków
                chevronWidth={chevronWidth}
                //disableSwipe
                //alwaysShowChevrons //zawsze pokazuj przyciski
                numberOfCards={1}
                slidesToScroll={1}
                outsideChevron
                //showSlither //pokazuj granice (pusta przestrzen pomiedzy)
                //firstAndLastGutter
                activeItemIndex={activeItemIndex}
                requestToChangeActive={setActiveItemIndex}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
            >
            <div key={1} style={{ height: imgHeight, background: '#EEE no-repeat' }}> <img src="../images/baner-01.jpg" alt="baner" /> </div>
            <div key={2} style={{ height: imgHeight, background: {img3} }}> Tekst 2 </div>
            <div key={3} style={{ height: imgHeight, background: 'url(https://placeimg.com/380/200/nature) no-repeat' }}>Third card</div>
            <div key={4} style={{ height: imgHeight, background: 'url(https://placeimg.com/380/200/tech) no-repeat' }}>Fourth card</div>
            </ItemsCarousel>
        {/* </Wrapper> */}
      </div>
    );
}


export default Header;