import React, { useState } from "react";
import Card from "../card/Card";
import { useSelector, useDispatch } from "react-redux";
import { FILTER_CARDS, ORDER_CARDS, filterCards, orderCards } from "../../Redux/action";
import './favorites.css' ;
 


function Favorites(){

    const [aux, setAux] = useState(false)

    // console.log('favoritos',state.myFavorites)
    const dispatch = useDispatch();
    
    const handleOrder = (event) => {
      setAux(!aux)
      dispatch(orderCards(event.target.value));
    }
    
    const handleFilter = (event) => {
      dispatch(filterCards(event.target.value));
    }
    const favorites = useSelector(state => state.myFavorites);
    console.log('lo que se renderiza ',favorites)
    
    return(
      <>
        <select onChange={handleOrder}>
          <option value="B"></option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unKnown</option>
        </select>
        <div className="favoritesDiv">
            {favorites?.map(fav => (
              <Card 
              name={fav.name}
              id={fav.id}
              key={fav.id}
              gender={fav.gender}
              status={fav.status}
              image={fav.image}
              />
              ))}
       </div>
         </>
    );
};
export default Favorites;