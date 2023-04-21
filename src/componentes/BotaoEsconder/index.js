import { useState } from "react";
import "./botao-esconder.css";
import React from "react";

const BotaoEsconder = () => {
  const [show, setShow] = useState(true);
  return <button className="botao-esconder">
    <img src='/imagens/Botão add-01 1.png' alt='Toggle esconder'/>
  </button>;
};

export default BotaoEsconder;
