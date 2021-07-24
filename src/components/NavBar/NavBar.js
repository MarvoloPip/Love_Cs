import React, { Component } from 'react';
import {Link as Direct} from "react-router-dom"
import './NavBar.css' // stylesheet
import mis from "./mi" // menu items

class NavBar extends React.Component {


    constructor(props) {
        super(props);
        this.state = {mced: false, dis: "none"}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        
        this.setState(pmced => ({
            mced: !pmced.mced
        }));
        //console.log(this.state)
        if (!this.state.mced) {
            // this.state.dis = "block";
            //this.setState(dis, "block");
            this.setState(() => ({
                dis: "block"
            }));
        }
        else {
            //this.state.dis = "none";
            this.setState(() => ({
                dis: "none"
            }));
        }
    }


    render () {
        return (

            <nav className="nb">
                
                <h1 className="nb_logo" onClick={this.handleClick}>Menu</h1>

                <div className="nb_bars" onClick={this.handleClick}>
                    <div id="nb_bar_1"></div>
                    <div id="nb_bar_2"></div>
                    <div id="nb_bar_3"></div>
                </div>

                <div className="nb_mc" style={{ display: this.state.dis }}></div>

                <ul className="nb_menu_ul_start" style={{ display: this.state.dis }}>

                    {mis.map((item, index) => {
                    
                        return (
                            <li key={item.title}>
                                <Direct to={item.url} className="no_underline_pls">
                                    <h4 className={item.cName} href={item.url} >
                                                {item.title}
                                    </h4>
                                </Direct>

                            </li>
                            )
                            

                    })}

                </ul>
                
              
                
            </nav>
        )
    }
}

export default NavBar