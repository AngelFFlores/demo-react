import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  const paths = location.pathname.split("/").filter(Boolean);

  if (paths.length === 0) return null;

  return (
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Inicio</Link>
        </li>

        {paths.map((path, index) => {
          const to = "/" + paths.slice(0, index + 1).join("/");

          const isLast = index === paths.length - 1;

          return (
            <li
              key={to}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
            >
              {isLast ? path : <Link to={to}>{path}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}