import React, {Component} from 'react';
import { TweenMax, TimelineMax, Power3 } from 'gsap';
import { Tween } from 'react-gsap';
import img_01 from '../svg/kolo1.svg';

//Poczytać na : https://www.npmjs.com/package/react-gsap
//Obejżeć https://www.youtube.com/watch?v=_-YfoAzIDzw

/*
 const NaukaPage_ = () => {
    
    let logoItem = useRef(null);

    console.log("LogoItem:",logoItem);
    useEffect(() => {
        console.log("LogoItem:")
        TweenMax.to(logoItem, 3, {x:400, ease: Power3.easeOut})
    }, [])

     return ( 
        <>
            <div>Nauka Page</div>
            <img 
                ref={el => {logoItem = el}} 
                src={img_01}
                style={{
                    width: '50px',
                }}
                alt=""
            />
        </>
      );
 }
*/

class RajdPage extends Component {
    state = { 
        myTween: null,
        myElement: null,
        tl: null,
    }

    efekt1() {
        TweenMax.to(this.myElement, 3, {x:400, ease: Power3.easeOut})
        this.tl = new TimelineMax({repeat: 5, yoyo: true});
        //this.tl = new TimelineMax();
        this.tl.to(this.myElement, 1, {x:300,  ease: Power3.easeOut})
               //.to(this.myElement, 1, {y:300,  ease: Power3.easeOut})
               //.to(this.myElement, 1, {x:100,  ease: Power3.easeOut})
               .to(this.myElement, 1, {y:100,  ease: Power3.easeOut});
    }

    componentDidMount() {
        // const tween = this.tween.getGSAP();
        // tween.timeScale(0.5);
        //this.tl = new TimelineMax();
        this.efekt1();

    }
    
    render() { 
        


        return (
            <> 
                <h1>Rajdy </h1>
                <img 
                    ref={el => {this.myElement = el}} 
                    src={img_01}
                    style={{
                       width: '50px',
                    }}
                    alt=""
                />
                <Tween
                    to={{ x: 200, }} duration={2} 
                    ease="Back.easeOut"
                    ref={ref => this.tween = ref}
                >
                    <div>Nauka jazdy</div>
                </Tween>
            </>
         );
    }
}
 
 
export default RajdPage;