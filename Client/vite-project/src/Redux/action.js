// Acá va Estado Global Inicial
// y Logica de cada ACTION
import axios from "axios";

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const FILTER_CARDS = 'FILTER_CARDS';
export const ORDER_CARDS = 'ORDER_CARDS';



// ACTION | addFav
export const addFav =  (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character)
         
             return dispatch({
                type: ADD_FAVORITE,
                payload: data,
             });
          
      } catch (error) { throw new TypeError('El favorito no ha sido agregado')
         
      }
   };
};


// ACTION | removeFav
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async(dispatch) => {
      try {
         const { data } = await axios.delete(endpoint)
            return dispatch({
               type: REMOVE_FAVORITE,
               payload: data,
         });
      } catch (error) {  throw new TypeError('El favorito no puede ser Removido')
         
      }
      
    };
 };
// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAVORITE,
//         payload: id
//     };
// };

export const filterCards = (payload) => {
    return {
        type: FILTER_CARDS,
        payload,
    };
};

export const orderCards = (payload) => {
    return {
        type: ORDER_CARDS,
        payload,
    };
};