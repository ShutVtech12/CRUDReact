import React from "react";
import { Button, Container, Table, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";


class Elliminaar extends React.Component {
    componentDidMount() 
    {

    }

    render() {
        return (
            <Container className="MarginContainer" >
  
                <div>
        <h2>Elliminar la pregunta</h2>
        <label> 
          Id de la pregunta
          <input type="number"></input>
        </label>
        
      </div>
      <div>
        
    

                    <button type="submit" class="btnE" name="btnEnviar">Elliminaar</button>
                </div>
                
    
                
             
            </Container>
        )
    }
}

export default Elliminaar;