
import React, { Component } from 'react';
import { Tween, TimelineMax } from "gsap";

class AnimRotateLoop extends Component {
    state = {
        myTween: null,
        myElement: null,
    }
 

    componentDidMount() {
        document.removeEventListener('scroll', () => this.setNewPosition());
        //this.myTween = TweenMax.to(this.myElement, 1, {x: 100, y: 100});
    }

    componentWillUnmount()  { //Gdy będzie się odmontowywał
         document.removeEventListener('scroll', () => this.setNewPosition());
    }

    setNewPosition() {
        const rotation = window.pageYOffset;

        this.setState({
            rotation,
        })
    }

    //my-class

    render() {
        const { className, src } = this.props;

//        return <div ref={div => this.myElement = div} />;

        //const tl = new Timeline();

        // let rot = this.state.rotation /2;
        // if(this.props.direction === "left") rot = -rot;

        return (
            <img
            ref={el => {this.myElement = el}} 
            className={className}
            src={src}
            style={{
                // transform: `rotate(${rot}deg)`,
            }}
            alt="" />
        )
    }
}

export default AnimRotateLoop;