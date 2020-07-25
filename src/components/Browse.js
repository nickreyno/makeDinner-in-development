import React, { Component, Fragment } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import resultObj from "../assets/resultObjNew.js";

class Browse extends Component {
    constructor(props){
        super(props)
this.state={
    this:'sucks'
}
    }
    componentDidMount(){
        console.log(this.props)
        // const {filter, subFilter} = this.props.location.state
            // console.log(filter,subFilter)
            // console.log(this.props.location.state)
    }
    render(){
        return (
            <h1>hello</h1>
        )
    }
}

export default Browse;