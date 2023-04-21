import "./rodape.css";
import React from "react";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/imagens/facebook.png" alt="Facebook icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/imagens/twitter.png" alt="Twitter icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/imagens/instagram.png" alt="Instagram icon" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="Organo logo" />
      </section>
      <section>
        <p>
          <a
            href="https://www.github.com/sheezarainbow9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Desenvolvido por S.H.E.
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Rodape;
