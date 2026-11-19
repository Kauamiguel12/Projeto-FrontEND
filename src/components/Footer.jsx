

import './Footer.css';

import logoFooter from '../assets/logo-footer.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <img src={logoFooter} alt="Digital Store" />

          <p>
            A Digital Store oferece produtos de qualidade
            para você encontrar tudo o que precisa.
          </p>

          <div className="social-icons">
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <img src={facebook} alt="" />
            </a>

            <a href="https://www.instagram.com/" aria-label="Instagram">
              <img src={instagram} alt="" />
            </a>

            <a href="https://twitter.com/" aria-label="Twitter">
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Informações</h3>
          <a href="/">Sobre nós</a>
          <a href="/">Política de privacidade</a>
          <a href="/">Termos de uso</a>
        </div>

        <div className="footer-links">
          <h3>Contato</h3>
          <p>Atendimento ao cliente</p>
          <p>Segunda a sexta</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Digital Store. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
