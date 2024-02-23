
import { useState } from 'react';
import './searchBar.css'


const SearchBar =(props)=> {

   const [id, setId] = useState('')

   const handleClick = ()=>{
      props.onSearch(id)
   }

const handleChange = (event)=> {
   setId(event.target.value)
}

   return (
      <div>
         <input 
            onChange={handleChange}
            value={id} 
            id='myInput' 
            className='imput' 
            type='search' placeholder="id.."
         />
         <button className='botonAgregar' onClick={handleClick}>AGREGAR</button>
      </div>
   );
}
export default SearchBar;