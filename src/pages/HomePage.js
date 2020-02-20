import React, { useState } from 'react';

//import Article from '../components/Article'
import 'pure-react-carousel/dist/react-carousel.es.css';

//kolejna karuzela z: https://github.com/bitriddler/react-items-carousel
import ItemsCarousel from 'react-items-carousel';


//import { Button, Icon, Col } from 'antd';


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

            <br/>Zapoznaj się co do tej poty udało  nam się zorganizować. 
            <br/>Na pewno znajdziesz coś dla siebie i rodziny.

            <br/>Akcja ta, nie powstała by, bez nieustannej pomocy mojej kochanej żony oraz licznej grupy znajomych  i przyjaciół.



            {/* {artList} */}
            {/* <KaruzelaC/> */}
        </div>
    );
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