import { useNavigate, useParams } from "react-router-dom";

export default function PaymentDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="container py-5">

      <button
          className="btn btn-outline-secondary mb-4"
          onClick={() => window.history.back()}
        >
          <i className="bi bi-arrow-left me-2"></i>
          Regresar
        </button>

      <div className="card shadow-sm">
        <div className="card-body">

          <div className="text-center mb-4">
            <img
              src={`https://i.pravatar.cc/150?img=${id}`}
              alt="Alumno"
              className="rounded-circle shadow"
              width="120"
              height="120"
            />

            <h3 className="mt-3 mb-0">Mateo Flores</h3>

            <p className="text-muted">
              Gotitas • 10:00 AM - 11:00 AM
            </p>
          </div>

          <hr />

          <h5 className="mb-3">
            Historial de Pagos
          </h5>

          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Monto</th>
                  <th>Método</th>
                  <th>Estado</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>05/01/2026</td>
                  <td>$2,500</td>
                  <td>Efectivo</td>
                  <td>
                    <span className="badge bg-success">
                      Pagado
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>04/02/2026</td>
                  <td>$2,500</td>
                  <td>Transferencia</td>
                  <td>
                    <span className="badge bg-success">
                      Pagado
                    </span>
                  </td>
                </tr>

                <tr>
                   <td>05/03/2026</td>
                  <td>-</td>
                  <td>$2,500</td>
                  <td>
                    <span className="badge bg-warning text-dark">
                      Pendiente
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </div>
  );
}