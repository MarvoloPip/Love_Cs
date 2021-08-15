import React, { Component, useEffect, Helmet} from 'react';
import * as ReactDOM from 'react-dom';
import './Spray.css' // stylesheet

import Canvs2 from '../Canvs2/Canvs2'; //the canvas
import guns from "./guns" // the gun list
import { tsMethodSignature } from '@babel/types';

class Spray extends React.Component {

    constructor(props) {
        super(props);
        this.state = {img: "url(../../t_img/ak_stats.png)", gif: "url(../../sprays/ak47_spray.gif)"}
        this.gun_click = this.gun_click.bind(this);
    }

    gun_click(i) {

        var na = document.getElementById("gun_title")
        var d_stat = document.getElementById("d_stat");
        var f_stat = document.getElementById("f_stat");
        var mc_stat = document.getElementById("mc_stat");
        var s_gif = document.getElementById("gif_box");
        var g_pic = document.getElementById("g_img");

        // <div className="gun_img" id="g_img" ></div> 
        var g_pic2 = document.createElement('div');
        g_pic2.id = "g_img";
        g_pic2.className = "gun_img" + (i+1);
        // console.log(g_pic2.id);

        // <div className="spray_box" id="gif_box"></div>
        var s_gif2 = document.createElement('div');
        s_gif2.id = 'gif_box';
        s_gif2.className = 'spray_box' + (i+1);


 

        if (0 <= i < guns.length){

            // title
            na.innerHTML = guns[i].name; 

            // stats
            d_stat.innerHTML = guns[i].d;
            f_stat.innerHTML = guns[i].fr;
            mc_stat.innerHTML = guns[i].mc;

            // pics/gifs
            // s_gif.style.background = "url(" + guns[0].spr + ")";
            // g_pic.setAttribute('style', 'background: url(../../t_img/ak_stats.png)');
            // g_pic.style.background = "url(./ak_stats.png)";
            // console.log(g_pic.style.background);

            g_pic.parentElement.replaceChild(g_pic2, g_pic);
            s_gif.parentElement.replaceChild(s_gif2, s_gif);

        }
        //console.log(i);
        return
    }

    erase() {
        
        
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

    }


    render () {
        return (

            // <div ref={el => (this.instance = el)} >
            // </div>
           

            
            <div className="spray_home">
                <meta charSet="UTF-8"/>
                <title>Practice Spray N00B</title>
        
                <div className="spray_grid">
        
                    <div className="header">
                        <h1>This isn't COD lmao </h1>
                        <h2> practice your spray </h2>
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
                            <div className="spray_box1" id="gif_box"></div>
                            <div className="gun_box">
                                <div className="gun_img1" id="g_img" ></div>  
                                {/* <img className="gun_img" src={('./ak_stats.png')} /> */}
                                <div className="gun_details">
                                    <div id="gun_title_box"> 
                                        <p id="gun_title">AK-47</p>
                                    </div>
                                    <div id="gun_dbox" className="gun_detail_box">
                                        <p> Damage </p>
                                        <p> Firerate</p>
                                        <p> Mag/Cap </p>
                                    </div>
                                    <div id="gun_dbox2" className="gun_detail_box">
                                        <p id="d_stat"> {guns[0].d} </p>
                                        <p id="f_stat">  {guns[0].fr}</p>
                                        <p id="mc_stat"> {guns[0].mc} </p>
                                    </div>
                                </div>
                            </div>                                   

                        </div>

                        <div className="gun_buts">
                            {guns.map((item, index) => {
                        
                                return (
                                    <button id={index} onClick={ () => this.gun_click(index)}>
                                        
                                        <h4>
                                            {item.name}
                                        </h4>

                                    </button>
                                    )
                            })}

                        </div>                     
            
                    </div>
        
                </div>               
    
            </div>
            
           
        )
    }
}

export default Spray