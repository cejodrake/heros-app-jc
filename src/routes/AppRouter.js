import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRouters } from "./DashboardRouters";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/*" element={<DashboardRouters />} />
      </Routes>
    </BrowserRouter>
  );
};
