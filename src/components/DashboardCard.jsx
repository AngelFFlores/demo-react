import { useNavigate } from "react-router-dom";

export default function DashboardCard({
  title,
  description,
  icon,
  route,
}) {
  const navigate = useNavigate();

  return (
    <div className="col-md-6 mb-4">
      <div
        className="card shadow-sm h-100 card-hover"
        style={{ cursor: "pointer" }}
        onClick={() => route && navigate(route)}
      >
        <div className="card-body text-center p-5">
          <div className="display-3 mb-3">{icon}</div>

          <h4 className="fw-bold">{title}</h4>

          <p className="text-muted mb-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}