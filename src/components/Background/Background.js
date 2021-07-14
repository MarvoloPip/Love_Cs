import React, { Component } from 'react';
import './Background.css' // stylesheet
import NavBar from '../NavBar/NavBar.js'; // navbar


class Background extends React.Component {

    render () {
        return (

            <div className="Home">

                <head>
                <meta charset="UTF-8"/>
                <title>Git Gud N00B</title>
                </head>
        
                <div className="home_grid">
        
                <div className="header">
                    <h1>You suck at CS:GO</h1>
                </div>
                <div className="body">
        
                    <div className="highlight_reel">
                    
                    <div id="cs1"></div>
                    <div id="cs2"></div>
                    <div id="cs3"></div>
                    <div id="cs4"></div>
                    <div id="cs5"></div>
                    <div id="cs6"></div>
                    </div>
        
        
                    <NavBar />
        
                </div>
        
                </div>
        
    
    
            </div>
           
        )
    }
}

export default Background