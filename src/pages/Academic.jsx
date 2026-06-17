import DashboardCard from "../components/DashboardCard";

export default function Academic() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Académico</h1>

        <p className="text-muted">
          Selecciona un nivel.
        </p>
      </div>

      <div className="row">
        <DashboardCard
          icon="🍼"
          title="Nivel 1"
          description="Estimulación inicial."
          route="/level/1"
        />

        <DashboardCard
          icon="👶"
          title="Nivel 2"
          description="Desarrollo motriz."
          route="/level/2"
        />

        <DashboardCard
          icon="🚼"
          title="Nivel 3"
          description="Exploración guiada."
          route="/level/3"
        />

        <DashboardCard
          icon="🎨"
          title="Nivel 4"
          description="Autonomía y aprendizaje."
          route="/level/4"
        />
      </div>
    </div>
  );
}