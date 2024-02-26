import React from "react";
import './About.css'
import foto_de_frente from "../../utils/foto_de_frente.png"

function About(){
    return(
        <div>
            <div className="fotoDiv">
                <img src={foto_de_frente} alt="Foto de Jose"/>
            </div>
            <br />
            <h1>SOY HENRY</h1>
            <br />
            <h2>"PROYECTO RICK and MORTY"</h2>
            <br />
            <h2>Esta aplicación esta siendo creada por José Rengifo</h2>
            <h2>La historia de las tarjetas está ambientada en la serie televisiva 'Rick and Morty'
            <h2>que se inspira en la película 'Volver al Futuro'</h2>
                donde se recrea las aventuras de un cientifico despistado (Rick) y su nieto (Morty).
            </h2>

        </div>

    )
};
export default About;