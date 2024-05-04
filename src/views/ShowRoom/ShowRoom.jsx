import { Button, Grid } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function ShowRoom({ allowedRoles }) {
  document.title = "ShowRoom";

  const { dataToken } = useAuthContext();

  return allowedRoles?.includes(dataToken.role) ? (
    <iframe
      src="/externalData/showRoomGsp.html"
      title="Show Room GSP"
      width="100%"
      height="550"
    />
  ) : dataToken?.email ? (
    <Navigate to="/unauthorized" />
  ) : (
    <Navigate to="/login" />
  );
}
