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

// const BotaoEsconder = () => {
//   const [show, setShow] = useState(true);
//   return (
//     <>
//       <button onClick={() => setShow(!show)}>
//         {show ? `Ocultar` : `Mostrar`}
//       </button>
//       <div className={show ? "show-element" : null}>
//         {show && <h1>Exemplo</h1>}
//       </div>
//     </>
//   );
// }

function BotaoEsconder(props) {
  console.log(props);
  const [mostrar, setMostrar] = useState(true);
  return (
    <>
      <button onClick={() => setMostrar(!mostrar)}>Clique aqui!</button>
      {mostrar && "<Formulario />"}
    </>
  );
}

export default BotaoEsconder;
