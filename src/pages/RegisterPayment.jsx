import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function RegisterPayment() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    alumno: "",
    fecha: "",
    monto: "",
    metodo: "",
    mes: "",
    referencia: "",
    observaciones: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(form);

    await Swal.fire({
      icon: "success",
      title: "Pago registrado",
      text: "El pago se registró correctamente.",
      showConfirmButton: false,
      timer: 1800,
    });

    navigate("/payments");
  };

  return (
    <div className="container py-5">
      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => window.history.back()}
      >
        <i className="bi bi-arrow-left me-2"></i>
        Regresar
      </button>

      <h2 className="fw-bold mb-4">Registrar Pago</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Alumno</label>

                <select
                  className="form-select"
                  name="alumno"
                  value={form.alumno}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar...</option>
                  <option>Mateo Flores</option>
                  <option>Sofía Martínez</option>
                  <option>Santiago Pérez</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Fecha</label>

                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  value={form.fecha}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Monto</label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="$0.00"
                  name="monto"
                  value={form.monto}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Método de pago</label>

                <select
                  className="form-select"
                  name="metodo"
                  value={form.metodo}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar...</option>
                  <option>Efectivo</option>
                  <option>Transferencia</option>
                  <option>Tarjeta</option>
                  <option>SPEI</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Mensualidad</label>

                <select
                  className="form-select"
                  name="mes"
                  value={form.mes}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar...</option>
                  <option>Enero</option>
                  <option>Febrero</option>
                  <option>Marzo</option>
                  <option>Abril</option>
                  <option>Mayo</option>
                  <option>Junio</option>
                  <option>Julio</option>
                  <option>Agosto</option>
                  <option>Septiembre</option>
                  <option>Octubre</option>
                  <option>Noviembre</option>
                  <option>Diciembre</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Referencia</label>

                <input
                  type="text"
                  className="form-control"
                  name="referencia"
                  value={form.referencia}
                  onChange={handleChange}
                  placeholder="Opcional"
                />
              </div>

              <div className="col-12 mb-3">
                <label className="form-label">Observaciones</label>

                <textarea
                  rows="3"
                  className="form-control"
                  name="observaciones"
                  value={form.observaciones}
                  onChange={handleChange}
                  placeholder="Opcional"
                ></textarea>
              </div>
            </div>

            <div className="d-flex gap-2">
              <button className="btn btn-success" type="submit">
                <i className="bi bi-check-circle me-2"></i>
                Registrar Pago
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate("/payments")}
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
