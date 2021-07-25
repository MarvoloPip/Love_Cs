import React, { Component } from 'react';
import './Spray.css' // stylesheet

import Canvs from '../Canvs/Canvs'; // canvas component

class Spray extends React.Component {


    runCan() {

        const canvas = document.querySelector("#cv");
        const ctx = canvas.getContext("2d");

        // console.log("sup");
        canvas.height = canvas.parentElement.height/2;
        console.log("hiasd'");


    }


    render () {
        return (
            
            <div className="spray_home">
                <meta charSet="UTF-8"/>
                <title>Practice Spray N00B</title>
        
                <div className="spray_grid">
        
                    <div className="header">
                        <h1>This isn't COD lmao</h1>
                    </div>
                    <div className="spray_body">    
            
                        <div className="canvas_sqaure">

                          <Canvs />

                        </div>
X                        
        

            
                    </div>
        
                </div>

    
            </div>
            
           
        )
    }
}

export default Spray