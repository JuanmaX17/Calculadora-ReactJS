import React from "react";
import "./pantalla.css"

function Pantalla({children}){



    return(

        <div className="calculadora__pantalla">
            {children}
        </div>

    )
}

export {
    Pantalla
}