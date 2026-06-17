import { Link } from "react-router-dom";

export default function Navbar() {
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
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/academic">
                Académico
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/students">
                Alumnos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/payments">
                Pagos
              </Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link" to="/reports">
                Reportes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}