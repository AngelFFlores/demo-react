import { Link } from "react-router-dom";
import { Collapse } from "bootstrap";

export default function Navbar() {
  const closeMenu = () => {
    const menu = document.getElementById("navbarMenu");

    if (menu && menu.classList.contains("show")) {
      Collapse.getOrCreateInstance(menu).hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/home">
          Sonrisas & Burbujas Mty
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link" onClick={closeMenu}>
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/academic" className="nav-link" onClick={closeMenu}>
                Académico
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/students" className="nav-link" onClick={closeMenu}>
                Alumnos
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/payments" className="nav-link" onClick={closeMenu}>
                Pagos
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/reports" className="nav-link" onClick={closeMenu}>
                Reportes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}