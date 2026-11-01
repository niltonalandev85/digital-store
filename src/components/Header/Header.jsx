import { useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import miniCart from "../../assets/mini-cart.svg";
import "./Header.css";

export default function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  function handleSearch(event) {
    event.preventDefault();

    const filter = search.trim();

    if (filter) {
      navigate(`/products?filter=${encodeURIComponent(filter)}`);
    }
  }

  return (
    <header className="site-header">
      <div className="header-content">
        <Link to="/" className="header-logo">
          <Logo />
        </Link>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Pesquisar produto..."
            aria-label="Pesquisar produto"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <button type="submit" aria-label="Buscar">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </button>
        </form>

        <div className="header-actions">
          <Link to="/cadastro" className="register-link">
            Cadastre-se
          </Link>

          <Link to="/entrar" className="login-link">
            Entrar
          </Link>

          <img src={miniCart} alt="Carrinho de compras" className="cart-icon" />
        </div>
      </div>

      <nav className="main-navigation">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink
          to="/produtos"
          className={({ isActive }) =>
            isActive || location.pathname === "/products" ? "active" : ""
          }
        >
          Produtos
        </NavLink>

        <NavLink to="/categorias">Categorias</NavLink>

        <NavLink to="/meus-pedidos">Meus Pedidos</NavLink>
      </nav>
    </header>
  );
}
