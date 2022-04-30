import React from "react";
import "./boton.css"



function Boton({children,click}){



    return(

        <div className={`boton ${(!(children === ".") && isNaN(children)) ? "operacion": "numero" }`} onClick={()=>click(children)}>
            {children}
        </div>
    )
}

export {
    Boton
}