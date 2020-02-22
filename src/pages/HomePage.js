import React, { useState, Component } from 'react';

import { TweenMax, TimelineMax, Power3, Elastic } from 'gsap';
import { Tween } from 'react-gsap';

//import Article from '../components/Article'

//kolejna karuzela z: https://github.com/bitriddler/react-items-carousel
//import ItemsCarousel from 'react-items-carousel';
//import 'pure-react-carousel/dist/react-carousel.es.css';


import Puzle01 from '../svg/puzle01.js';
import { match } from 'minimatch';


//http://react-responsive-carousel.js.org/storybook/?selectedKind=Carousel&selectedStory=PropTypes&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel
//tutaj chyba cos konkretniejszego:
//https://reactjsexample.com/infinite-carousel-for-react/



// const articles = [
//     {
//         id: 1,
//         title: "Zapraszamy na festyn",
//         author: "Jan Malinowski",
//         text: "Bala bala, jakiś tekst"
//     },
//     {
//         id: 2,
//         title: "Artykuł 2",
//         author: "Jan Nowak",
//         text: "Bala bala, jakiś tekst"
//     },
// ]

const HomePage = () => {
 
    // const artList = articles.map(el => (
    //     <Article key={el.id} {...el} /> //Przekazanie wysztkich właściwości
    // ))
    
    return(
        <div className="home">

            <h1>Witaj na naszej stronie.</h1>

            <br/>Promujemy rolkarstwo i zdrowy stylu życia.

            <br/>Zapoznaj się co do tej pory udało  nam się zorganizować. 
            <br/>Na pewno znajdziesz coś dla siebie i rodziny.

            <br/>Akcja ta, nie powstała by, bez nieustannej pomocy mojej kochanej żony oraz licznej grupy znajomych  i przyjaciół.

            <div className="home__puzle">
                {/* <img src={img_puzle} alt="puzle"/> */}
                <Puzle/>

            </div>


            {/* {artList} */}
            {/* <KaruzelaC/> */}
        </div>
    );
}






class Puzle extends Component {
    state = { 
        myElement: [],
        tl: null,
        //puzle: [], 
    }


    searchElement() {

    }


    efekt1() {
        //Wyszukanie elementów w pliku SVG
        const puzle = []; 
        let nr = 1;
        let szukanyPuzel = 'rolka01';
        while(this.myElement.getElementById(szukanyPuzel) && nr<25) {
            puzle.push(this.myElement.getElementById(szukanyPuzel));
            nr++;    
            szukanyPuzel = nr<10 ? 'rolka0' + nr : 'rolka' + nr;
        }
        
        const easeEfekt = [Power3.easeOut,  Power3.easeI, Elastic.easeInOut, Elastic.easeOut ]
        
        let propertis = [];
        for(let i=0; i<nr; i++) {
            propertis.push({
                time: Math.random() * 2 + 2,
                efect: {
                    x: Math.random() * 500 ,
                    y: Math.random() * 500 ,
                    rotation: Math.random() * 90,
                    ease: easeEfekt[ Math.floor(Math.random() * easeEfekt.length)],
                    delay: Math.random() * 20,
                    //delay: i,
                },
            })
        }
            
        for(let i=0; i < puzle.length; i++) {
            TweenMax.from(puzle[i], propertis[i].time, propertis[i].efect);
        }
        
        //const el = this.myElement.getElementById('rolka08');
        //TweenMax.from(el, 5, {x:1000, ease: Elastic.easeOut, zIndex: -2, })
    }

    componentDidMount() {
        this.efekt1();
    }
    
    render() { 
        
        return (
            <> 
                <Puzle01 ref={el => {this.myElement = el}} />
                {/* <Tween
                    to={{ x: 200, }} duration={2} 
                    ease="Back.easeOut"
                    ref={ref => this.tween = ref}
                >
                    <div>Nauka jazdy</div>
                </Tween> */}
            </>
         );
    }
}



// const Wrapper = styled.div`
//   padding: 0 20px;
//   max-width: 300px;
//   margin: 0 auto;
// `;

// const KaruzelaC = () => {
//     const [activeItemIndex, setActiveItemIndex] = useState(0);
//     const chevronWidth = 40;
//     return (
//         <div style={{"padding":5, width: '60vw', "maxWidth":"1fr","margin":10}}>
        
//         <ItemsCarousel
//             containerWidth={'200px'}
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
//           <div key={2} style={{ height: 200, background: 'url(https://placeimg.com/380/200/nature)' }}>Second card</div>
//           <div key={3} style={{ height: 200, background: '#000' }}>Third card</div>
//           <div key={4} style={{ height: 200, background: '#EEE' }}>Fourth card</div>
//         </ItemsCarousel>
        
//       </div>
//     );
// }
 







export default HomePage;