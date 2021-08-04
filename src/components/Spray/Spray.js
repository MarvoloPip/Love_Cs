import React, { Component, useEffect, Helmet} from 'react';
import * as ReactDOM from 'react-dom';
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

        
        var area = document.getElementsByClassName("draw_area")[0];
        //area.remove();

        var area2 = document.createElement("div");
        var can2 = document.createElement("Canvs2");
        can2.id = "cv";
        area2.className = "draw_area";
        
        area2.appendChild(can2);

        var but = document.querySelector("#but_box");


        but.parentElement.replaceChild(area2, area);

        var area2 = <div className="draw_area"></div>;
        var can3 = <Canvs2 id ="cv"/>;



        ReactDOM.render(can3, document.getElementsByClassName("draw_area")[0]);
        //const can = document.getElementsByTagName("canvas")[0];

        
        
        // const ctx = can.getContext("2d");
        // ctx.closePath();
        // ctx.clearRect(0, 0, can.width, can.height);
        // ctx.beginPath();


        
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
                        
                            <div id="but_box">
                                <button id="er" onClick={this.erase}></button>
                                <p>Erase</p>
                            </div>

                            <div className="draw_area">
                    
                                <Canvs2 id="cv"/>

                            </div>
                            <div className="spray_box"></div>
                            <div className="gun_box">
                                <div className="gun_img"></div>  
                                <div className="gun_details">
                                    <div id="gun_title_box"> 
                                        <p id="gun_title">AK-47</p>
                                    </div>
                                    <div id="gun_detail_box" className="gun_detail_box">
                                        <p> Damage </p>
                                        <p> Firerate</p>
                                        <p> Mag/Cap </p>
                                    </div>
                                    <div id="gun_detail_box2" className="gun_detail_box">
                                        <p> Damage </p>
                                        <p> Firerate</p>
                                        <p> Mag/Cap </p>
                                    </div>
                                </div>
                            </div>                                   

                        </div>

                        <div className="gun_buts">
                            <button> bruh </button>
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