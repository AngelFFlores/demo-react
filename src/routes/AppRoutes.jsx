import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Academic from "../pages/Academic";
import MainLayout from "../pages/MainLayout";
import Level from "../pages/Level";
import Group from "../pages/Group";
import Students from "../pages/Students";
import Payments from "../pages/Payments";
import Reports from "../pages/Reports";
import CreateStudent from "../pages/CreateStudent";
import CreateGroup from "../pages/CreateGroup";
import StudentDetail from "../pages/StudentDetail";
import RegisterPayment from "../pages/RegisterPayment";
import PaymentDetail from "../pages/PaymentDetail";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Sin navbar */}
        <Route path="/" element={<Login />} />

        {/* Con navbar */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />

          <Route path="/academic" element={<Academic />} />

          <Route path="/level/:id" element={<Level />} />

          <Route path="/group/:id" element={<Group />} />

          <Route path="/students" element={<Students />} />

          <Route path="/payments" element={<Payments />} />

          <Route path="/reports" element={<Reports />} />

          <Route path="/alumnos/nuevo" element={<CreateStudent />} />

          <Route path="/groups/new" element={<CreateGroup />} />

          <Route path="/students/:id" element={<StudentDetail />} />

          <Route path="/payments/new" element={<RegisterPayment />} />
          <Route path="/payments/:id" element={<PaymentDetail />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
