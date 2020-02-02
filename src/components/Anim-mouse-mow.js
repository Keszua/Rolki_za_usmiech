//Animacja reaguje na ruch myszki

import React, { Component } from 'react';

class Animated1 extends Component {
    state = {
        posX: 0,
        posY: 0,
    }

    componentDidMount() {
        document.addEventListener('mousemove', (event) => this.setNewPosition(event));
    }

    componentWillUnmount()  { //Gdy będzie się odmontowywał
        document.removeEventListener('mousemove', (event) => this.setNewPosition(event));
    }

    setNewPosition(event) {
        const { clientX, clientY } = event;
        //const { ratioX, ratioY } = this.props;
        const centerX = window.innerWidth /2;
        const centerY = window.innerHeight /2;

        const posX = clientX - centerX;
        const posY = clientY - centerY;

        this.setState({
            posX: posX,
            posY: posY,
        })
    }

    render() {
        const { className, src } = this.props;
        const { posX, posY } = this.state;
        //console.log(this.state);
        return (
            <img 
            className={className}
            src={src}
            style={{
                // transform: `translate(${posX}px, ${posY}px)`,
                transform: `rotate(${posY}deg)`,
                
            }}
            alt="" />
        )
    }
}

export default Animated1;