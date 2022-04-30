import React from "react";
import "./contenedor.css"


function Contenedor({children}){



    return(

        <div className="contenedor">

            <div className="contenedor__caculadora">
                {children}
            </div>
            
        </div>
    )

}

export {
    Contenedor
}