export default function Students() {
  const alumnos = [
    {
      id: 1,
      nombre: "Mateo Flores",
      nivel: "Nivel 1",
      grupo: "Matutino",
      tutor: "Leslie Garrido",
    },
    {
      id: 2,
      nombre: "Sofía Martínez",
      nivel: "Nivel 2",
      grupo: "Vespertino",
      tutor: "Ana Martínez",
    },
    {
      id: 3,
      nombre: "Santiago Pérez",
      nivel: "Nivel 1",
      grupo: "Intermedio",
      tutor: "Carlos Pérez",
    },
  ];

  return (
    <div className="container py-5">
      <div className="d-flex flex-column flex-sm-row justify-content-between  align-items-start align-items-sm-center mb-4 gap-3">
        <div>
          <h1 className="fw-bold">Alumnos</h1>

          <p className="text-muted mb-0">
            Consulta y administración de alumnos.
          </p>
        </div>

        <button className="btn btn-primary">
          + Nuevo Alumno
        </button>
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
                  <th>Nombre</th>
                  <th>Nivel</th>
                  <th>Grupo</th>
                  <th>Tutor</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {alumnos.map((alumno) => (
                  <tr key={alumno.id}>
                    <td>
                      <img
                        src={`https://i.pravatar.cc/100?img=${alumno.id}`}
                        alt={alumno.nombre}
                        className="rounded-circle"
                        width="50"
                        height="50"
                      />
                    </td>

                    <td>{alumno.nombre}</td>

                    <td>{alumno.nivel}</td>

                    <td>{alumno.grupo}</td>

                    <td>{alumno.tutor}</td>

                    <td>
                      <div className="d-flex">
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        title="Ver"
                      >
                        <i className="bi bi-eye"></i>
                      </button>

                      <button
                        className="btn btn-sm btn-outline-secondary me-2"
                        title="Editar"
                      >
                        <i className="bi bi-pencil"></i>
                      </button>

                      <button
                        className="btn btn-sm btn-outline-danger"
                        title="Eliminar"
                      >
                        <i className="bi bi-trash"></i>
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