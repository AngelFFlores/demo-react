import DashboardCard from "../components/DashboardCard";

export default function Home() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Bienvenido</h1>

        <p className="text-muted">
          Sistema de Gestión de Estimulación Temprana
        </p>
      </div>

      <div className="row">
        <DashboardCard
          icon="👶"
          title="Académico"
          description="Niveles, grupos y horarios."
          route="/academic"
        />

        <DashboardCard
          icon="🧒"
          title="Alumnos"
          description="Registro y consulta de alumnos."
          route="/students"
        />

        <DashboardCard
          icon="💰"
          title="Pagos"
          description="Mensualidades, adeudos y pagos."
          route="/payments"
        />

        <DashboardCard
          icon="📊"
          title="Reportes"
          description="Estadísticas e indicadores."
          route="/reports"
        />
      </div>
    </div>
  );
}