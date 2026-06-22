import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Students() {
  const navigate = useNavigate();

  const [alumnos, setAlumnos] = useState([
    {
      id: 1,
      nombre: "Mateo Flores",
      nivel: "Gotitas",
      grupo: "10:00 AM - 11:00 AM",
      tutor: "Miss Maye",
    },
    {
      id: 2,
      nombre: "Sofía Martínez",
      nivel: "Rayitos",
      grupo: "11:00 AM - 12:00 PM",
      tutor: "Miss Alejandra",
    },
    {
      id: 3,
      nombre: "Santiago Pérez",
      nivel: "Exploradores",
      grupo: "2:00 PM - 3:00 PM",
      tutor: "Miss Maye",
    },
  ]);

  const handleDelete = async (alumno) => {
    const result = await Swal.fire({
      title: "¿Eliminar alumno?",
      text: `¿Desea eliminar el registro de ${alumno.nombre}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      // Aquí después llamarás a tu API
      setAlumnos((prev) => prev.filter((a) => a.id !== alumno.id));

      Swal.fire({
        icon: "success",
        title: "Eliminado",
        text: "El alumno fue eliminado correctamente.",
        timer: 1800,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="container py-5 px-3">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4 gap-3">
        <div>
          <h1 className="fw-bold">Alumnos</h1>

          <p className="text-muted mb-0">
            Consulta y administración de alumnos.
          </p>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/alumnos/nuevo")}
        >
          <i className="bi bi-plus-circle me-2"></i>
          Nuevo Alumno
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
                  <th>Horario</th>
                  <th>Tutor</th>
                  <th width="170">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {alumnos.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-5 text-muted">
                      No hay alumnos registrados.
                    </td>
                  </tr>
                ) : (
                  alumnos.map((alumno) => (
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
                            onClick={() => navigate(`/students/${alumno.id}`)}
                          >
                            <i className="bi bi-eye"></i>
                          </button>

                          <button
                            className="btn btn-sm btn-outline-secondary me-2"
                            title="Editar"
                             onClick={() => navigate(`/students/${alumno.id}`)}
                          >
                            <i className="bi bi-pencil"></i>
                          </button>

                          <button
                            className="btn btn-sm btn-outline-danger"
                            title="Eliminar"
                            onClick={() => handleDelete(alumno)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
