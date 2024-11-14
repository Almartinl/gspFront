import { Box, Button, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

export default function ResetPassword() {
  const location = useLocation();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const token = new URLSearchParams(location.search).get("token");
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (token) {
      const jwt = jwtDecode(token);
      console.log(jwt);
      registrarPassword(e, jwt);
    }
  };

  function registrarPassword(e, jwt) {
    e.preventDefault();
    console.log(jwt);
    fetch(`https://globalsolutionsprefabriquees.com/api/user/${jwt.id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ password: newPassword }),
    }).then((response) => {
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: t("textAlertCambioPassCuenta"),
        });
        setNewPassword("");
        navigate("/login");
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 7,
          gap: 2,
        }}
      >
        <TextField
          label={t("textNewPass")}
          type="password"
          fullWidth
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          color="success"
        />
        <TextField
          label={t("textConfPass")}
          type="password"
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          color="success"
        />
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmit}
            disabled={!newPassword || newPassword !== confirmPassword}
          >
            {t("textButtonRecoveryPass")}
          </Button>
        </Grid>
      </Box>
    </Container>
  );
}
