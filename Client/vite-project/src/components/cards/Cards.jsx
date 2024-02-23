import Card from "../card/Card"
import './cards.css'

export default function Cards({characters, onClose}) {
      console.log(characters)
   return(<div id="cards2" className="contenedor">
         {characters.map((item) =>{
            return(
               <Card 
               key = {item.id}
                id = {item.id}
                name = {item.name}
                status = {item.status}
                species = {item.species}
                gender = {item.gender}
                origin = {item.name.origen}
                image ={item.image}
                onClose={()=>onClose(item.id)}
                />
           )
          })}
       </div>
      ) 
}
