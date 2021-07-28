import React, { Component, useEffect, Helmet } from 'react';
import './Spray.css' // stylesheet

import Canvs from '../Canvs/Canvs'; // canvas component


class Spray extends React.Component {

    componentDidMount() {
        const canvas = document.querySelector("#cv");
    }
   

    runCan() {

        const canvas = document.getElementById("cv")[0];
        const ctx = canvas.getContext("2d");

        canvas.height = canvas.parentElement.height/2;
        console.log("hiasd'");


    }

    // useScript('./draw_script.js');

    render () {
        return (

            // <div ref={el => (this.instance = el)} >
            // </div>
           

            
            <div className="spray_home">
                <meta charSet="UTF-8"/>
                <title>Practice Spray N00B</title>
        
                <div className="spray_grid">
        
                    <div className="header">
                        <h1>This isn't COD lmao</h1>
                    </div>
                    <div className="spray_body">    
            
                        <div className="canvas_sqaure">

                            <Canvs class="cv" />
                           
                        </div>
X                        
        

            
                    </div>
        
                </div>
                <script > 
                    {this.runCan()}
                </script>
    
            </div>
            
           
        )
    }
}

export default Spray