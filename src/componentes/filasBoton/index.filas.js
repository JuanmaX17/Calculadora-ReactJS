import React from "react";
import "./filas.css"

function Fila({children}){


    return(

        <div className="calculadora__filas">
                {children}
        </div>

    )

}

export {
    Fila
}