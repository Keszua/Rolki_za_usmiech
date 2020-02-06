import React from 'react';
import Article from '../components/Article'
//var Carousel = require('react-responsive-carousel').Carousel;
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Carousel } from 'react-responsive-carousel';

//http://react-responsive-carousel.js.org/storybook/?selectedKind=Carousel&selectedStory=PropTypes&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel
//tutaj chyba cos konkretniejszego:
//https://reactjsexample.com/infinite-carousel-for-react/


const articles = [
    {
        id: 1,
        title: "Zapraszamy na festyn",
        author: "Jan Malinowski",
        text: "Bala bala, jakiś tekst"
    },
    {
        id: 2,
        title: "Artykuł 2",
        author: "Jan Nowak",
        text: "Bala bala, jakiś tekst"
    },

]

const HomePage = () => {
 
    const artList = articles.map(el => (
        <Article key={el.id} {...el} /> //Przekazanie wysztkich właściwości
    ))
    
    return(
        <div className="home">
            {/* {artList} */}
            {/* <DemoCarousel/> */}
            <Karuzelab/>
        </div>
    );
}
 

class Karuzelab extends React.Component {
    render() {
      return (
        <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
                interval={2000}
                isPlaying={true}
                lockOnWindowScroll={true}
            >
            <Slider>
                <Slide index={0}><img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" /></Slide>
                <Slide index={1}><img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" /></Slide>
                <Slide index={2}>I am the third Slide.</Slide>
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      );
    }
  }


class DemoCarousel extends React.Component {
    render() {
        return (
            <Carousel autoPlay >
                <div>
                    <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <div>Tekst 3</div>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <div>Tekst 4</div>
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <div>Tekst 5</div>
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <div>Tekst 6</div>
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    }
};





export default HomePage;