import { useParams } from "react-router-dom";

export default function StudentDetail() {
  const { id } = useParams();

  // Datos de ejemplo
  const alumno = {
    id,
    nombre: "Mateo Flores",
    nivel: "Gotitas",
    horario: "10:00 AM - 11:00 AM",
    tutor: "Miss Maye",
    edad: "2 años",
    fechaNacimiento: "15/03/2024",
    telefono: "81 1234 5678",
    direccion: "Monterrey, Nuevo León",
    observaciones: "Sin alergias registradas.",
    foto: `https://i.pravatar.cc/300?img=${id}`,
  };

  return (
    <div className="container py-4">

      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => window.history.back()}
      >
        <i className="bi bi-arrow-left me-2"></i>
        Regresar
      </button>

      <div className="card shadow-sm">
        <div className="card-body">

          <div className="row">

            <div className="col-md-4 text-center">

              <img
                src={alumno.foto}
                alt={alumno.nombre}
                className="rounded-circle shadow mb-3"
                width="180"
                height="180"
                style={{ objectFit: "cover" }}
              />

              <h3>{alumno.nombre}</h3>

              <span className="badge bg-success">
                Alumno Activo
              </span>

            </div>

            <div className="col-md-8">

              <h4 className="mb-3">
                Información del alumno
              </h4>

              <table className="table">

                <tbody>

                  <tr>
                    <th width="220">Nivel</th>
                    <td>{alumno.nivel}</td>
                  </tr>

                  <tr>
                    <th>Horario</th>
                    <td>{alumno.horario}</td>
                  </tr>

                  <tr>
                    <th>Tutor</th>
                    <td>{alumno.tutor}</td>
                  </tr>

                  <tr>
                    <th>Edad</th>
                    <td>{alumno.edad}</td>
                  </tr>

                  <tr>
                    <th>Fecha de nacimiento</th>
                    <td>{alumno.fechaNacimiento}</td>
                  </tr>

                  <tr>
                    <th>Teléfono del tutor</th>
                    <td>{alumno.telefono}</td>
                  </tr>

                  <tr>
                    <th>Dirección</th>
                    <td>{alumno.direccion}</td>
                  </tr>

                  <tr>
                    <th>Observaciones</th>
                    <td>{alumno.observaciones}</td>
                  </tr>

                </tbody>

              </table>

              <div className="mt-4">

                <button className="btn btn-warning me-2">
                  <i className="bi bi-pencil me-2"></i>
                  Editar
                </button>

                <button className="btn btn-primary">
                  <i className="bi bi-cash-coin me-2"></i>
                  Registrar pago
                </button>

              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}