import { useRef, useState } from "react";

export default function CreateStudent() {
  const fileInputRef = useRef(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Alumno creado:", form);
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
                    style={{ width: 120, height: 120 }}
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
                type="file"
                accept="image/*"
                capture="environment"
                ref={fileInputRef}
                className="d-none"
                onChange={handlePhotoChange}
              />
            </div>

            {/* FORM */}
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Nivel</label>
              <input
                type="text"
                className="form-control"
                name="nivel"
                value={form.nivel}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Grupo</label>
              <input
                type="text"
                className="form-control"
                name="grupo"
                value={form.grupo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Tutor</label>
              <input
                type="text"
                className="form-control"
                name="tutor"
                value={form.tutor}
                onChange={handleChange}
                required
              />
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => window.history.back()}
              >
                Cancelar
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}