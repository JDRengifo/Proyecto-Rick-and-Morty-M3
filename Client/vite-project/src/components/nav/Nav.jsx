import React from "react";
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
import './Nav.css'

function Nav(props){
    return(
        <div className="containerButton">
        
           <button className="botonNav">
            <Link to='/about'>about</Link>
          </button>
          
          <button className="botonNav">
            <Link to='/home'>home</Link>
          </button>
         
          <button className="botonNav">
            <Link to='/favorites'>favorites</Link>
          </button>

          <SearchBar onSearch={props.onSearch} />
          </div>
        );
};
export default Nav;