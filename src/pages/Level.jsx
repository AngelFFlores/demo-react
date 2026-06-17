import DashboardCard from "../components/DashboardCard";
import { useParams } from "react-router-dom";

export default function Level() {
  const { id } = useParams();

  return (
    <div className="container py-5">
      <div className="d-flex flex-column flex-sm-row justify-content-between  align-items-start align-items-sm-center mb-4 gap-3">
        <div>
          <h1 className="fw-bold">Nivel {id}</h1>

          <p className="text-muted mb-0">
            Selecciona un grupo.
          </p>
        </div>

        <button className="btn btn-primary">
          + Nuevo Grupo
        </button>
      </div>

      <div className="row">
        <DashboardCard
          icon="☀️"
          title="Grupo Matutino"
          description="09:00 - 10:00"
          route="/group/1"
        />

        <DashboardCard
          icon="🌤️"
          title="Grupo Intermedio"
          description="11:00 - 12:00"
          route="/group/2"
        />

        <DashboardCard
          icon="🌙"
          title="Grupo Vespertino"
          description="16:00 - 17:00"
          route="/group/3"
        />
      </div>
    </div>
  );
}