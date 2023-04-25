import "./botao-esconder.css";
import React from "react";

function BotaoEsconder(props) {
  console.log(props);
  return (
    <>
      <button className="button-hide" onClick={props.onClick}> 
        <img src="/imagens/Botão add-01 1.png"/>
      </button>
    </>
  );
}

export default BotaoEsconder;
