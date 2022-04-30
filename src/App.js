import './App.css';
import React from 'react';
import  {Contenedor} from "./componentes/Contenedor/index.contenedor"
import {Boton} from "./componentes/Boton/index.boton"
import {Fila} from "./componentes/filasBoton/index.filas"
import {Pantalla} from "./componentes/Pantalla/index.patalla"
import { useState } from 'react';
import { evaluate } from 'mathjs'
import {Btncorrect} from "./componentes/Btncorrect/index.Btncorrect"

const calculadora = [
  ["1","2","3","+"],
  ["4","5","6","-"],
  ["7","8","9","*"],
  ["=","0",".","/"],
]

function App() {

  const [input,setInput] = useState("")
  const [calcEstado,setCalcEstado] = useState("correct")


  const maximoDeCaracteres = (valor)=>{
   
      if(input.length <= 13 || valor === "=" || valor === "Clear" ){
        return true
      }else{
        setCalcEstado("incorrect")
        alert("Maximo de caracteres permitidos")
        return false
      }
    
  }

  const validarOperabilidad = (valor)=>{

    if(!((valor === "*" && input.charAt(input.length - 1) === "/") || (valor === "/" && input.charAt(input.length - 1) === "*")) && !((valor === "*" && input.charAt(input.length - 1) === "+") || (valor === "+" && input.charAt(input.length - 1) === "*")) && !((valor === "*" && input.charAt(input.length - 1) === "-") || (valor === "-" && input.charAt(input.length - 1) === "*")) && !((valor === "/" && input.charAt(input.length - 1) === "-") || (valor === "/" && input.charAt(input.length - 1) === "-")) && !((valor === "/" && input.charAt(input.length - 1) === "+") || (valor === "/" && input.charAt(input.length - 1) === "+"))) return true
    else return false

  }

  const onClick = (valor)=>{
    
    if(maximoDeCaracteres(valor)){

        if(!((valor === input.charAt(input.length -1) && (valor === "+" || valor === "-" || valor === "*" || valor === "/"))  )){

          if(validarOperabilidad(valor)){

            if (valor !== "Clear" && valor !== "="){ 
              setInput(input + valor);
              setCalcEstado("correct")
            }
            else if (valor === "=")

              if (input) {

                try {

                  if(`${evaluate(input)}` ==="NaN"){
                    
                    setCalcEstado("incorrect")
                  }

                  setInput(`${evaluate(input)}`);

                }catch (error) {
                    setCalcEstado("incorrect")
                }
                
              
              } 
              else setInput("")

            else setInput("")

          }else{
              var cambio = input.slice(0,input.length - 1) 
          
              setInput(cambio + valor)
          }

      }else{
        console.log("err")
      }
    
    }
      
  }


  return (
    
    <Contenedor>

      <Btncorrect calcEstado={calcEstado}/>

      <Pantalla>
          {input}
      </Pantalla>

      { 
        calculadora.map((fila)=>(
          <Fila key={fila[0]}>
            {fila.map((boton)=>(
                <Boton click={onClick} key={boton}>
                  {boton}
                </Boton>
              ))
            }
          </Fila>
          )) 
      }
      
      <Fila>
         <Boton click={onClick}>
           Clear
         </Boton>
      </Fila>



    </Contenedor>


  );
}

export default App;
