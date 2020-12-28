import React from 'react';
import './ConnectionBar.css';

export default class SpeedChanger extends React.Component{

    render() {
        return ( 
            <div className = "the-bar">
                <div className = "linkedin icons" onClick = {this.golinkedin}></div>
                <div className = "github icons" onClick = {this.gogithub}></div>
            </div>
        );
    }

    golinkedin = () => {
        window.open("https://www.linkedin.com/in/yu-geng-wang-474553192/")
    }

    gogithub = () => {
        window.open("https://github.com/mtwangyugeng")
    }
}

