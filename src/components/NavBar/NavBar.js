import React, { Component } from 'react';
import './NavBar.css' // stylesheet
import mis from "./mi" // menu items

class NavBar extends Component {
    render () {
        return (

            <nav className="nb">

                <h1 className="nb_logo">Menu</h1>

                <div className="nb_menu_icon"> 
                    
                </div>

                <ul>

                    {mis.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url} >
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
                
              
                
            </nav>
        )
    }
}

export default NavBar