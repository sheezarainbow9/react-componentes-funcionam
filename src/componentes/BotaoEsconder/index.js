import { useState } from "react";
import "./botao-esconder.css";
import React from "react";
import formulario from "../Formulario";


const BotaoEsconder = () => {
  const [show, setShow] = useState(false);
  return (
    <button 
      className="botao-esconder" 
      style={{ backgroundImage: 'url("/imagens/Botão add-01 1.png")' }}
    ></button>
  );
};



export default BotaoEsconder;



