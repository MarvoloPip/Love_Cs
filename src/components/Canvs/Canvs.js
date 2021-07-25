import React, { Component } from 'react';
import './Canvs.css' // stylesheet

class Canvs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {drawing: false, 
                        canvas: null,
                        ctx: null,
                    }
        this.setup = this.setup.bind(this);
        this.setup();
    }

    setup() {
        // happens on mouse click
            
        // this.setState(sd => ({
        //     drawing: true
        // }));
        // this.setState(sd => ({
        //     canvas: document.querySelector("#cv"),
        //     ctx: this.state.canvas.getContext("2d")
        // }));
        console.log("hi this is stept;");
        const canvas = document.querySelector("#cv");


        canvas.addEventListener("mousedown", this.startPos());
        canvas.addEventListener("mouseup", this.finPos());
        canvas.addEventListener("mousemove", this.draw());   

    }

    startPos(e) {
        this.setState(sd => ({
            drawing: true
        }));
        this.draw(e);
        console.log("hi this is st;");

    }

    finPos() {
        this.setState(sd => ({
            drawing: false
        }));
        const canvas = document.querySelector("#cv");
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        console.log("hi this is fin;");

    }

    draw(e) {
        console.log("hi this is draw;");

        if (!this.state.drawing) {return}
        else {
            const canvas = document.querySelector("#cv");
            const ctx = canvas.getContext("2d");

            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.strokeStyle = "orange";

            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX, e.clientY);

        }
    }
    


    render () {
        return (
            <div>
                <canvas id="cv" onClick={this.draw}>
                    


                </canvas>        
                
            </div>
           
        )
    }
}

export default Canvs