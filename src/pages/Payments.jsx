import { useNavigate } from "react-router-dom";

export default function Payments() {
  const navigate = useNavigate();
  const pagos = [
    {
      id: 1,
      nombre: "Mateo Flores",
      nivel: "Nivel 1",
      grupo: "Matutino",
      mensualidad: "$2,500",
      estado: "Pagado",
    },
    {
      id: 2,
      nombre: "Sofía Martínez",
      nivel: "Nivel 2",
      grupo: "Vespertino",
      mensualidad: "$2,500",
      estado: "Pendiente",
    },
    {
      id: 3,
      nombre: "Santiago Pérez",
      nivel: "Nivel 1",
      grupo: "Intermedio",
      mensualidad: "$2,500",
      estado: "Vencido",
    },
  ];

  const getBadge = (estado) => {
    switch (estado) {
      case "Pagado":
        return <span className="badge bg-success">Pagado</span>;

      case "Pendiente":
        return <span className="badge bg-warning text-dark">Pendiente</span>;

      case "Vencido":
        return <span className="badge bg-danger">Vencido</span>;

      default:
        return <span className="badge bg-secondary">Sin Estado</span>;
    }
  };

  return (
    <div className="container py-5 px-3">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4 gap-3">
        <div>
          <h1 className="fw-bold">Pagos</h1>

          <p className="text-muted mb-0">
            Administración de mensualidades y pagos.
          </p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/payments/new")}
        >
          <i className="bi bi-cash me-2"></i>
          Registrar Pago
        </button>{" "}
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar alumno..."
                />
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>Foto</th>
                  <th>Alumno</th>
                  <th>Nivel</th>
                  <th>Grupo</th>
                  <th>Mensualidad</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {pagos.map((pago) => (
                  <tr key={pago.id}>
                    <td>
                      <img
                        src={`https://i.pravatar.cc/100?img=${pago.id}`}
                        alt={pago.nombre}
                        className="rounded-circle"
                        width="50"
                        height="50"
                      />
                    </td>

                    <td>{pago.nombre}</td>

                    <td>{pago.nivel}</td>

                    <td>{pago.grupo}</td>

                    <td>{pago.mensualidad}</td>

                    <td>{getBadge(pago.estado)}</td>

                    <td>
                      <div className="d-flex">
                        <button
                          className="btn btn-sm btn-success me-2"
                          title="Registrar Pago"
                          onClick={() => navigate("/payments/new")}
                        >
                          <i className="bi bi-cash"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-outline-primary"
                          title="Ver Historial"
                          onClick={() => navigate(`/payments/${pago.id}`)}
                        >
                          <i className="bi bi-eye"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
