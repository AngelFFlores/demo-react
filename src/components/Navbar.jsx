import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setOpen(prev => !prev);
  const closeMenu = () => setOpen(false);

  // Cierra menú cuando cambia la ruta
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/home">
          Sonrisas & Burbujas Mty
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/home" onClick={closeMenu}>
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/academic" onClick={closeMenu}>
                Académico
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/students" onClick={closeMenu}>
                Alumnos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/payments" onClick={closeMenu}>
                Pagos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/reports" onClick={closeMenu}>
                Reportes
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}