import React from "react"
import './Sidebar.css';
import {SidebarData} from "./SidebarData";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
       <div className="Sidebar">
        <ul className="SidebarList">
            {SidebarData.map((val,key)=> {
                return (
                 <li
                    key={key}
                    className="section"
                    onClick={() => {
                        window.location.pathname = val.link;
                    }}
                 >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
                </li>
                );
            })}
          </ul>
        </div>
     );
}

export default Sidebar;