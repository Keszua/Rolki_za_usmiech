//Animacja reaguje na przewijanie strony

import React, { Component } from 'react';

class Animated2 extends Component {
    state = {
        rotation: 0,
    }

    componentDidMount() {
        document.addEventListener('scroll', (event) => this.setNewPosition(event));
    }

    componentWillUnmount()  { //Gdy będzie się odmontowywał
        document.removeEventListener('scroll', (event) => this.setNewPosition(event));
    }

    setNewPosition(event) {
        //console.log(event);
        //const { clientX, clientY } = event;
        const rot = window.pageYOffset;

        this.setState({
            rotation: rot,
        })
    }

    render() {
        const { className, src } = this.props;

        return (
            <img 
            className={className}
            src={src}
            style={{
                //transform: `translate(${posX}px, ${posY}px)`,
                transform: `rotate(${this.state.rotation}deg)`,
            }}
            alt="" />
        )
    }
}

export default Animated2;