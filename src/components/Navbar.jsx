import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  // Cierra menú cuando cambia la ruta
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info shadow">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/home">
          <img
            src={logo}
            alt="Sonrisas & Burbujas"
            width="50"
            height="50"
            className="rounded-circle bg-white p-1 shadow-sm me-3"
            style={{ objectFit: "cover" }}
          />

          <div className="d-flex flex-column">
            <span className="fw-bold fs-5 text-white">Sonrisas & Burbujas</span>

            <small className="text-white" style={{ opacity: 0.85 }}>
              Monterrey
            </small>
          </div>
        </Link>

        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
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

            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>
                Cerrar sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
