import { useRef, useState } from "react";
import Swal from "sweetalert2";

export default function CreateStudent() {
  const fileInputRef = useRef(null);

  const niveles = ["Gotitas", "Rayitos", "Exploradores", "Avanzado"];

  const horarios = [
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
  ];

  const tutores = ["Miss Maye", "Miss Alejandra"];

  const [form, setForm] = useState({
    nombre: "",
    nivel: "",
    grupo: "",
    tutor: "",
    foto: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setForm({
        ...form,
        foto: URL.createObjectURL(file),
      });
    }
  };

  const openCamera = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Alumno creado:", form);

    await Swal.fire({
      icon: "success",
      title: "Guardado con éxito",
      text: "El alumno fue registrado correctamente.",
      showConfirmButton: false,
      timer: 1800,
    });

    window.history.back();
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4 fw-bold">Nuevo Alumno</h1>

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* FOTO */}
            <div className="mb-4 text-center">
              <div className="mb-3">
                {form.foto ? (
                  <img
                    src={form.foto}
                    alt="Foto alumno"
                    className="rounded-circle shadow"
                    width="120"
                    height="120"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div
                    className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto"
                    style={{
                      width: 120,
                      height: 120,
                    }}
                  >
                    <i className="bi bi-person fs-1 text-secondary"></i>
                  </div>
                )}
              </div>

              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={openCamera}
              >
                <i className="bi bi-camera me-2"></i>
                Tomar foto
              </button>

              <input
                ref={fileInputRef}
                type="file"
                className="d-none"
                accept="image/*"
                capture="environment"
                onChange={handlePhotoChange}
              />
            </div>

            {/* NOMBRE */}
            <div className="mb-3">
              <label className="form-label">Nombre del alumno</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>

            {/* NIVEL */}
            <div className="mb-3">
              <label className="form-label">Nivel</label>
              <select
                className="form-select"
                name="nivel"
                value={form.nivel}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione un nivel</option>

                {niveles.map((nivel) => (
                  <option key={nivel} value={nivel}>
                    {nivel}
                  </option>
                ))}
              </select>
            </div>

            {/* HORARIO */}
            <div className="mb-3">
              <label className="form-label">Horario</label>
              <select
                className="form-select"
                name="grupo"
                value={form.grupo}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione un horario</option>

                {horarios.map((horario) => (
                  <option key={horario} value={horario}>
                    {horario}
                  </option>
                ))}
              </select>
            </div>

            {/* TUTOR */}
            <div className="mb-3">
              <label className="form-label">Tutor</label>
              <select
                className="form-select"
                name="tutor"
                value={form.tutor}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione un tutor</option>

                {tutores.map((tutor) => (
                  <option key={tutor} value={tutor}>
                    {tutor}
                  </option>
                ))}
              </select>
            </div>

            {/* BOTONES */}
            <div className="d-flex gap-2 justify-content-end">
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-check-circle me-2"></i>
                Guardar
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => window.history.back()}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
