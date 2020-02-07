import React, { useState }  from 'react';
import { Switch, Route  } from 'react-router-dom';
import img1 from '../images/baner-01.jpg';
import img2 from '../images/baner-02.jpg';
import img3 from '../images/baner-03.jpg';

//kolejna karuzela z: https://github.com/bitriddler/react-items-carousel
import ItemsCarousel from 'react-items-carousel';


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



const KaruzelaC = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <div style={{"padding":5,  "maxWidth":"1fr","margin":10}}>
        
        <ItemsCarousel
            containerWidth={'380px'}
            infiniteLoop
            gutter={12}
            activePosition={'center'}
            //chevronWidth={200}
            //disableSwipe
            //alwaysShowChevrons
            numberOfCards={2}
            slidesToScroll={1}
            //outsideChevron
            chevronWidth={chevronWidth}
            //showSlither
            //firstAndLastGutter
            activeItemIndex={activeItemIndex}
            requestToChangeActive={setActiveItemIndex}
            leftChevron={<button>{'<'}</button>}
            rightChevron={<button>{'>'}</button>}
        >
          <div key={1} style={{ height: 200, background: 'url(https://placeimg.com/380/200/nature)' }}>First card</div>
          <div key={2} style={{ height: 200, background: 'url(https://placeimg.com/380/200/animals)' }}>Second card</div>
          <div key={3} style={{ height: 200, background: 'url(https://placeimg.com/380/200/nature)' }}>Third card</div>
          <div key={4} style={{ height: 200, background: 'url(https://placeimg.com/380/200/tech)' }}>Fourth card</div>
        </ItemsCarousel>
        
      </div>
    );
}


export default Header;