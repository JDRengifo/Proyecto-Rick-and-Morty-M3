import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player"
import './crearUsuario.css'
import validation from "../validation/validation";
import RandMVideo from "../../utils/RandMVideo.mp4"
import Titulo_Rick_and_Morty from "../../utils/Titulo_Rick_and_Morty.png"
import registro from '../../utils/registro.png'


function CrearUsuario({ reLogin }){
    const [inputCrear, setInputCrear] = useState({
      email:'',
      password: ''
    })
    
   
    const handleChange = (event) => {
       setInputCrear({
        ...inputCrear,
        [event.target.name]: event.target.value
      })

      
    }
    
    const onSubmit = (event) => {
      event.preventDefault();
      reLogin(inputCrear)
    }
    
    
    return(
     
      <div className="registerdiv">
        <h1 className="tituloRegister">BIENVENIDOS A LA PAGINA DE LA COLECCION DE ESTAMPAS DE <br/>
          "RICK AND MORTY"</h1>
        <h2>A continuación escriba los datos requeridos para su registro:</h2>
        <form  onSubmit={onSubmit}>

           
              <label htmlFor="email">EMAIL: </label>
              <br />
              <input 
              size={40}
                  className="input"
                  type="text"
                  name='email'
                  value={inputCrear.email}
                  onChange = {handleChange}
                  />
                                         
              <hr style={{borderStyle: "none"}}/>
              <label htmlFor="password">PASSWORD: </label>
              <br />
              <input 
                  size={40}
                  className="input"
                  type="text" 
                  name='password'
                  value={inputCrear.password}
                  onChange = {handleChange}
                />
              <hr style={{borderStyle: "none"}}/>
              <button type="submit" disabled={!inputCrear.email || !inputCrear.password}>CONFIRMAR</button>
                <h2>BIENVENIDO</h2>
                <br />
              <div className="fotoRegistro">
                  <img src={registro} alt="foto" className='fotoRam'/>
                 
              </div>
           
        </form>
    
      </div>

    )
}
export default CrearUsuario;