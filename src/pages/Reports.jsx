export default function Reports() {
  return (
    <div className="container py-5 px-3">
      <div className="mb-4">
        <h1 className="fw-bold">Reportes</h1>

        <p className="text-muted">
          Resumen general del sistema.
        </p>
      </div>

      <div className="row mb-4">
        <div className="col-md-3 mb-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h2 className="fw-bold text-primary">45</h2>
              <p className="mb-0">Alumnos</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h2 className="fw-bold text-success">8</h2>
              <p className="mb-0">Grupos</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h2 className="fw-bold text-info">38</h2>
              <p className="mb-0">Pagos Realizados</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h2 className="fw-bold text-danger">7</h2>
              <p className="mb-0">Pagos Pendientes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header fw-bold">
              Alumnos por Nivel
            </div>

            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Nivel</th>
                    <th>Alumnos</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Nivel 1</td>
                    <td>15</td>
                  </tr>

                  <tr>
                    <td>Nivel 2</td>
                    <td>12</td>
                  </tr>

                  <tr>
                    <td>Nivel 3</td>
                    <td>8</td>
                  </tr>

                  <tr>
                    <td>Nivel 4</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header fw-bold">
              Próximos Eventos
            </div>

            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  🎉 Festival de Primavera
                </li>

                <li className="list-group-item">
                  👨‍👩‍👧 Clase muestra para padres
                </li>

                <li className="list-group-item">
                  📝 Evaluaciones trimestrales
                </li>

                <li className="list-group-item">
                  📸 Sesión fotográfica infantil
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}