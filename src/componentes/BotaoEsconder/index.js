import { useState } from "react";
import "./botao-esconder.css";
import React from "react";


// const BotaoEsconder = () => {
//   const [show, setShow] = useState(false);
//   return (
//     <button 
//       className="botao-esconder" 
//       style={{ backgroundImage: 'url("/imagens/Botão add-01 1.png")' }}
//     >
//     </button>
//   );
// };

const BotaoEsconder = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? `Ocultar` : `Mostrar`}
      </button>
      <div className={show ? "show-element" : null}>
        {show && <h1>Exemplo</h1>}
      </div>
    </>
  );
}

export default BotaoEsconder;



