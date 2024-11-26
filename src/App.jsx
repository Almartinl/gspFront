import { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./views/Home/Home";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Configurador from "./views/Configurador/Configurador";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ROLES } from "./const/roles";
import Login from "./views/login/Login";
import DashboardInicio from "./views/DashboardInicio/DashboardInicio";
import DashboardUsuarios from "./views/DashboardUsuarios/DashboardUsuarios";
import Account from "./views/Account/Account";
import PrivateRouteAdmin from "./components/routes/PrivatRoute/PrivateRouteAdmin";
import PrivateRoute from "./components/routes/PrivatRoute/PrivateRoute";
import Unauthorized from "./views/unauthorized/Unauthorized";
import DashboardPresupuestos from "./views/DashboardPresupuestos/DashboardPresupuestos";
import Contact from "./views/Contact/Contact";
import Productos from "./views/Productos/Productos";
import DashboardContacto from "./views/DashboardContacto/DashboardContacto";
import Proyectos from "./views/Proyectos/Proyectos";
import Nosotros from "./views/Nosotros/Nosotros";
import DashboardProductos from "./views/DashboardProductos/DashboardProductos";
import DashboardProyectos from "./views/DashboardProyectos/DashboardProyectos";
import Cookies from "./components/Cookies/Cookies";
import Policity from "./views/policity/Policity";
import DashboardOfertas from "./views/DashboardOfertas/DashboardOfertas";
import ResetPassword from "./views/ResetPassword/ResetPassword";
import ShowRoom from "./views/ShowRoom/ShowRoom";
import { useTranslation } from "react-i18next";

function App() {
  const [showCookieNotification, setShowCookieNotification] = useState(
    !localStorage.getItem("cookiesAccepted")
  );

  const handleCookieAccept = () => {
    localStorage.setItem("cookiesAccepted", true);
    setShowCookieNotification(false);
  };
  const handleCookieClose = () => {
    setShowCookieNotification(false);
  };

  const { t } = useTranslation();

  function ResetPasswordWithToken() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");

    return <ResetPassword token={token} />;
  }
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="configurateur" element={<Configurador />} />
            <Route path="unauthorized" element={<Unauthorized />} />
            <Route path="contact" element={<Contact />} />
            <Route path="produits" element={<Productos />} />
            <Route path="projets" element={<Proyectos />} />
            <Route path="nous" element={<Nosotros />} />
            <Route
              path="/reset-password"
              element={<ResetPasswordWithToken />}
            />
            <Route
              path="showroom"
              element={<ShowRoom allowedRoles={[ROLES.Admin]} />}
            />
          </Route>
          <Route element={<PrivateRoute allowedRoles={[ROLES.User]} />}>
            <Route path="/account" element={<Account />} />
          </Route>
          <Route element={<PrivateRouteAdmin allowedRoles={[ROLES.Admin]} />}>
            <Route path="/dashboard" element={<DashboardInicio />} />
            <Route path="/dashboard/usuarios" element={<DashboardUsuarios />} />
            <Route
              path="/dashboard/presupuestos"
              element={<DashboardPresupuestos />}
            />
            <Route path="/dashboard/contacto" element={<DashboardContacto />} />
            <Route path="/dashboard/publi" element={<DashboardOfertas />} />
            <Route
              path="/dashboard/proyectos"
              element={<DashboardProyectos />}
            />
          </Route>
          <Route path="/login" element={<Layout />}>
            <Route index element={<Login />} />
          </Route>

          <Route path="/policity" element={<Layout />}>
            <Route index element={<Policity />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {showCookieNotification && (
        <Cookies onAccept={handleCookieAccept} onClose={handleCookieClose} />
      )}
    </AuthContextProvider>
  );
}

export default App;
