import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Header.css';
import logo from '../assets/logo-header.svg';

function Header() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    navigate(`/produtos?busca=${encodeURIComponent(search)}`);
  }

  return (
    <header className="header">
      <div className="header-top">
        <Link to="/">
          <img src={logo} alt="Digital Store" className="logo" />
        </Link>

        <form className="header-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <button type="submit">
            🔍
          </button>
        </form>

        <div className="header-actions">
          <Link to="/produtos">Cadastre-se</Link>

          <Link to="/produtos" className="login-button">
            Entrar
          </Link>

          <Link to="/produtos" className="cart-button">
            🛒
          </Link>
        </div>
      </div>

      <nav className="header-navigation">
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/produtos">Categorias</Link>
        <Link to="/produtos">Meus Pedidos</Link>
      </nav>
    </header>
  );
}

export default Header;