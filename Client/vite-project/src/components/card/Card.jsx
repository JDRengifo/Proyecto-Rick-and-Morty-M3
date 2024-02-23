import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { addFav, removeFav } from '../../Redux/action';
import './Card.css'


function Card(props) {
   const {id, name, status, gender, species, origin, image} = props;
console.log(props)
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites)

   const [isFav, setIsFav] = useState(false);

   let char = {
      id,
      name,
      status,
      gender,
      species,
      image
   }
   
   const handleFavorite = ()=>{
       if (isFav) {
          setIsFav(false);
          dispatch(removeFav(id))
        } else {
           setIsFav(true);
           dispatch(addFav(char))
         }
      }
    
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return(
      <div  className = "carta">
         <h2>key = {id}</h2>
          <button  className='botonEliminar' onClick={() => {props.onClose(props.id)}}>X</button>
          <h2 className='numeroDeCarta'>{id}</h2>
         <Link to={`/detail/${id}`}>
          <h2 className='nombre'>{name}</h2>
         </Link>
         {
          isFav ? (
            <button className='botonCorazon' onClick={handleFavorite}>❤️</button>
            ) : (
            <button className='botonCorazon' onClick={handleFavorite}>🤍</button>
            )
          }
          <h2 className='status'> {status}</h2>
          <h2 className='species'>{species}</h2>
          <h2 className='gender'>{gender}</h2>
          <h2 className='origen'> {origin}</h2>
          <img src={image} alt=''  margin = '10px'/>
         
      </div>
    
   );
}

export default Card;
// const mapStateToProps = (state) => {
//    return {
//       favorites: state.myFavorites   };
// };
// export default connect(mapStateToProps, {addFav, removeFav})(Card);