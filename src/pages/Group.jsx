import { useParams } from "react-router-dom";

export default function Group() {
  const { id } = useParams();

  const alumnos = [
    {
      id: 1,
      nombre: "Mateo Flores",
      edad: "8 meses",
      nivel: "Nivel 1",
      grupo: "Matutino",
      tutor: "Leslie Garrido",
    },
    {
      id: 2,
      nombre: "Sofía Martínez",
      edad: "10 meses",
      nivel: "Nivel 1",
      grupo: "Matutino",
      tutor: "Ana Martínez",
    },
    {
      id: 3,
      nombre: "Santiago Pérez",
      edad: "12 meses",
      nivel: "Nivel 1",
      grupo: "Matutino",
      tutor: "Carlos Pérez",
    },
  ];

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1 className="fw-bold">Grupo {id}</h1>

          <p className="text-muted mb-0">
            Lista de alumnos inscritos.
          </p>
        </div>

        <button className="btn btn-primary">
          + Nuevo Alumno
        </button>
      </div>

      <div className="row">
        {alumnos.map((alumno) => (
          <div key={alumno.id} className="col-md-4 mb-4">
            <div
              className="card shadow-sm h-100 card-hover"
              style={{ cursor: "pointer" }}
            >
              <div className="card-body text-center">
                <img
                  src={`https://i.pravatar.cc/300?img=${2}`}
                  alt={alumno.nombre}
                  className="rounded-circle border mb-3"
                  width="120"
                  height="120"
                />

                <h5 className="fw-bold">
                  {alumno.nombre}
                </h5>

                <hr />

                <div className="text-start">
                  <p className="mb-2">
                    <strong>Edad:</strong> {alumno.edad}
                  </p>

                  <p className="mb-2">
                    <strong>Nivel:</strong> {alumno.nivel}
                  </p>

                  <p className="mb-2">
                    <strong>Grupo:</strong> {alumno.grupo}
                  </p>

                  <p className="mb-3">
                    <strong>Tutor:</strong> {alumno.tutor}
                  </p>
                </div>

                <button className="btn btn-outline-primary w-100">
                  Ver Perfil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}