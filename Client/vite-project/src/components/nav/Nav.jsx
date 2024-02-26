import React from "react";
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
import './Nav.css'

function Nav(props){
    return(
        <div className="containerButton">
        
           <button className="botonNav">
            <Link to='/about'>ABAUT</Link>
          </button>
          
          <button className="botonNav">
            <Link to='/home'>HOME</Link>
          </button>
         
          <button className="botonNav">
            <Link to='/favorites'>FAVORITES</Link>
          </button>

          <SearchBar onSearch={props.onSearch} />
          </div>
        );
};
export default Nav;