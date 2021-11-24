import React from "react";
import { Button, Container, Table, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";


class agregar extends React.Component {
    componentDidMount() 
    {

    }

    render() {
        return (
            <Container className="MarginContainer" >
  
                <div>
        <h2>Crear Nueva pregunta</h2>
        <label> 
          Nombre de la pregunta
          <input type="text"></input>
        </label>
        <label> 
          Pregunta
          <input type="text"></input>
        </label>
        
      </div>
      <div>
        <h2></h2>
        <label> 
         ID de la pregunta
          <input type="number"></input> 
        </label>
        <label> 
         Respuesta
          <input type="text"></input> 
        </label>
        
      </div>
      <div>
        <h2></h2>
        <label class="textex"> 
       Drog Opcion 1     </label>
          <input type="file"></input> 
      </div>
      <div>
        <h2></h2>
        <label class="textex"> 
       Drog Opcion 2     </label>
          <input type="file"></input> 
      </div>
      <div>
        <h2></h2>
        <label class="textex"> 
       Drog Opcion 3     </label>
          <input type="file"></input> 
      </div>
      <div>
        <h2></h2>
        <label class="textex"> 
       Drog Opcion 4     </label>
          <input type="file"></input> 
      </div>
      <div>
        <h2></h2>
        <label class="textex"> 
       Target Opcion 1     </label>
          <input type="file"></input> 
      </div>
      <div>
        <h2></h2>
        <label class="textex"> 
        Target Opcion 2     </label>
          <input type="file"></input> 
      </div>
      <div>
        <h2></h2>
        <label class="textex"> 
        Target Opcion 3     </label>
          <input type="file"></input> 
      </div>
      <div>
        <h2></h2>
        <label class="textex"> 
        Target Opcion 4     </label>
          <input type="file"></input> 
      </div>
      <div align='center'>
                    <button type="submit" class="btnE" name="btnEnviar">Enviar</button>
                </div>
                
    
                
             
            </Container>
        )
    }
}

export default agregar;