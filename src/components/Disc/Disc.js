import React, { Component } from 'react';
import {Link as Direct} from "react-router-dom"
import './Disc.css' // stylesheet

class Disc extends React.Component {

    render () {
        return (

            <div className="db_div">
            <h1 className="title"> Disclaimer: </h1>
            {/* <h6> 
                hello hi thnx for visiting this site haha its meant to offend u but in a 
                good way to encourage u to get better while also preparing u for solo q lmao 

            </h6> */}
            <h6 className="h6"> hello hi thnx for visiting this site haha </h6>
            <h6 className="h6"> its meant to offend u but in a good way </h6>
            <h6 className="h6"> to encourage u to get better while also </h6>
            <h6 className="h6"> u for solo q lmao </h6>

            </div>
        )
    }
}

export default Disc