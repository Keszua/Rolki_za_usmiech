import React, { Component } from 'react';
import { TweenMax, Power3, Elastic } from 'gsap';
import Puzle01 from '../svg/puzleNapis.js';
//import Puzle02 from '../svg/puzleRolka.js';

class Puzle extends Component {
    state = { 
        myElement: [],
        tl: null,
        //puzle: [], 
    }

    
    efekt1() {
        console.log('propsy', this.props);
        //Wyszukanie elementów w pliku SVG
        const puzle = []; 
        let nr = 1;
        let szukanyPuzel = 'puzel01';
        while(this.myElement.getElementById(szukanyPuzel) && nr<25) {
            puzle.push(this.myElement.getElementById(szukanyPuzel));
            nr++;    
            szukanyPuzel = nr<10 ? 'puzel0' + nr : 'puzel' + nr;
        }
        
        const easeEfekt = [Power3.easeOut,  Power3.easeI, Elastic.easeInOut, Elastic.easeOut ]
        
        let propertis = [];
        for(let i=0; i<nr; i++) {
            propertis.push({
                time: Math.random() * 3 + 1,
                efect: {
                    x: Math.random() * 500 ,
                    y: Math.random() * 500 ,
                    rotation: Math.random() * 90,
                    ease: easeEfekt[ Math.floor(Math.random() * easeEfekt.length) ],
                    delay: Math.random() * 10,
                    //delay: i,
                    //textShadow: "0 0 15px black",
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
//    <h3 style={{color: 'black', textShadow: '0px 0px 3px rgb(255, 255, 255)', textOverflow: 'inherit' }}><b>{el.txt}</b></h3>

    render() { 
        
        return (
            // <div style={{ width: "100vw", height: "auto", boxShadow: "50px 50px "}}>
                <Puzle01 ref={el => {this.myElement = el}}  />
            // </div>
         );
    }
}

export default Puzle;