import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player"
import './form.css'
import validation from "../validation/validation";
import RandMVideo from "../../utils/RandMVideo.mp4"
import Titulo_Rick_and_Morty from "../../utils/Titulo_Rick_and_Morty.png"


function Form({ login }){
    const [input, setInput] = useState({
      email:'',
      password: ''
    })
    
    const [errors, setErrors] = useState({
      email:'',
      password: ''
    })

    const handleChange = (event) => {
       setInput({
        ...input,
        [event.target.name]: event.target.value
      })

      setErrors(validation({ ...input, [event.target.name]: event.target.value}))
    }
    
    const onSubmit = (event) => {
      event.preventDefault();
      login(input)
    }
    
    
    return(
      <div className="totalForm">
        <h2 className="autor">by: Rengifo José</h2>
      <div className="formdiv">
        <form  onSubmit={onSubmit}>
            <div className="imagenDiv">
            <img src="https://th.bing.com/th?id=OIP.gS0sLM8mRFXS_WzQmDMY5QHaLQ&w=202&h=308&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="image" alt="" />
            </div>

            <div className="inputDiv">
              <label htmlFor="email">EMAIL: </label>
              <br />
              <input 
              size={40}
                  className="input"
                  type="text"
                  name='email'
                  value={input.email}
                  onChange = {handleChange}
                  />
                  {errors.name !== '' && <h2 className="ventanaError">{errors.email}</h2>}
                        
              <hr style={{borderStyle: "none"}}/>
              <label htmlFor="password">PASSWORD: </label>
              <br />
              <input 
                  size={40}
                  className="input"
                  type="text" 
                  name='password'
                  value={input.password}
                  onChange = {handleChange}
                />
              {errors.name !== '' && <h2 className="ventanaError">{errors.password}</h2>}

              <hr style={{borderStyle: "none"}}/>
              <button type="submit" disabled={!input.email || !input.password || errors.email || errors.password}>INGRESAR</button>
            </div>
        </form>
        </div>
        <div className="videoDiv">
          <h1>"Rick and Morty Collection"</h1>
          {/* <img src={Titulo_Rick_and_Morty} alt="Foto de Jose"/> */}
        <div className="caja3" >
          <ReactPlayer 
            url={RandMVideo}
            width='100%'
            height='100%'
            muted
            playing
            // controls
            loop
            
            />
            </div>
        </div>
      </div>

    )
}
export default Form;