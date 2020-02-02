//Animacja reaguje na przewijanie strony

import React, { Component } from 'react';

class Animated2 extends Component {
    state = {
        rotation: 0,
    }

    componentDidMount() {
        document.addEventListener('scroll', () => this.setNewPosition());
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

    render() {
        const { className, src } = this.props;

        let rot = this.state.rotation /2;
        if(this.props.direction === "left") rot = -rot;

        return (
            <img 
            className={className}
            src={src}
            style={{
                transform: `rotate(${rot}deg)`,
            }}
            alt="" />
        )
    }
}

export default Animated2;