import DashboardCard from "../components/DashboardCard";

export default function Academic() {
  const levels = [
    {
      icon: "🫧",
      title: "Gotitas",
      description: "Estimulación inicial.",
      route: "/level/1",
    },
    {
      icon: "☀️",
      title: "Rayitos",
      description: "Desarrollo motriz.",
      route: "/level/2",
    },
    {
      icon: "🔎",
      title: "Exploradores",
      description: "Exploración guiada.",
      route: "/level/3",
    },
    {
      icon: "🚀",
      title: "Avanzado",
      description: "Autonomía y aprendizaje.",
      route: "/level/4",
    },
  ];

  return (
    <div className="container py-5 px-3">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Académico</h1>
        <p className="text-muted">Selecciona un nivel.</p>
      </div>

      <div className="row">
        {levels.map((level, index) => (
          <DashboardCard
            key={index}
            icon={level.icon}
            title={level.title}
            description={level.description}
            route={level.route}
          />
        ))}
      </div>
    </div>
  );
}