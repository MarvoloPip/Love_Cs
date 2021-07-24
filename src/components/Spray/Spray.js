import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import './Spray.css' // stylesheet

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

                {/* <Helmet> 
                    <script src="draw_script.js" type="text/javascript"></script>
                </Helmet> */}

                <meta charSet="UTF-8"/>
                <title>Practice Spray N00B</title>
        
                <div className="spray_grid">
        
                    <div className="header">
                        <h1>This isn't COD lmao</h1>
                    </div>
                    <div className="spray_body">
            
                        {/* Main juice innit */}
                        <div className="canvas_sqaure">

                            <canvas id="cv">
                            </canvas>


                        </div>
        

            
                    </div>
        
                </div>

    
            </div>
            
           
        )
    }
}

export default Spray