import React, { Component, useEffect, Helmet } from 'react';
import './Spray.css' // stylesheet

import Canvs2 from '../Canvs2/Canvs2';
import era from '../Canvs2/Canvs2';

class Spray extends React.Component {

    // componentDidMount() {
    //     const canvas = document.querySelector("#cv");
    // }
   

    // runCan() {

        // const canvas = document.getElementById("cv")[0];
        // const ctx = canvas.getContext("2d");

        // canvas.height = canvas.parentElement.height/2;
        // console.log("hiasd'");
    //     if (document.getElementById("cv")[0] == null) {
    //         console.log("bruh");
    //     }
    //     else {
    //         console.log("bruh2");
    //     }

    erase() {
        // const can = document.getElementsByTagName("canvas")[0];
        // if (can != null) {
        //     console.log("ads");
        //     const ctx = can.getContext("2d");
        //     ctx.closePath();
        //     ctx.clearRect(0, 0, can.width, can.height);
        //     ctx.beginPath();

        //     ctx.restore();
            

        // }else {
        //     console.log("as");
        // }

        const can = <Canvs2 />;
        
    }


    // }

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

                            <div className="draw_area">
                                <Canvs2 id="cv"/>
                                <button onClick={this.erase}>

                                </button>
                            </div>

                        </div>
                      
                        {/* <Canvs2 id="cv"/> */}
                       
            
                    </div>
        
                </div>
                <script>
                    {this.runCan}
                </script>
               
    
            </div>
            
           
        )
    }
}

export default Spray