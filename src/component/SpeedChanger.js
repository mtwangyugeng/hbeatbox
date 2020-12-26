import React from 'react';
import PropTypes from "prop-types";

import './SpeedChanger.css';

export default class SpeedChanger extends React.Component{
    static propTypes = {
        faster_g: PropTypes.func,
        slower_g: PropTypes.func,
        speedo: PropTypes.number
    }

    render() {
        return ( 
            <div className = "speed-changer">
                <div className = "speed-changer-button" onClick = {this.faster_g}>+</div>
                <div className = "speed-changer-speed">{this.props.speedo + " ms"}</div>
                <div className = "speed-changer-button" onClick = {this.slower_g}>-</div>
            </div>
        );
    }

    faster_g = () =>{
        this.props.faster_g()
    }

    slower_g = () =>{
        this.props.slower_g()
    }

}

