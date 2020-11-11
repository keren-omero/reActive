import React from 'react';
import '../App.css';
import RandomFunction from './RandomFunction';

function HomePage() {
      return (
        <div className="HomePage">
        <h1> Home Page: Create new training!</h1>
        <RandomFunction />
        </div>
       );
}
export default HomePage;


/*
import React, { Component } from 'react';
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
 <Link to="#" className="menu-bar">
         <FaIcons.FaBars />

class HomePage extends Component {
    render() {
        <div className="HomePage">
        <Link to="#" className="menu-bar">
         <FaIcons.FaBars />
         </Link>
        </div>
        return <h1> Home Page Component!!!! </h1>
    }
}
*/