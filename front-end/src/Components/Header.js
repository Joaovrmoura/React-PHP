import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid ms-5 me-5">
          <NavLink to="/" className="navbar-brand">Crud de Usuários</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">Página inicial</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/userlist" className="nav-link">Listar usuarios</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Adduser" className="nav-link">Adicionar Usuários</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" 
              aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
export default Header;