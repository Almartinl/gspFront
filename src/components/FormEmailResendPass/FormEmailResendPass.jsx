import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuthContext } from "../../contexts/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const theme = createTheme();

export default function FormEmailResendPass({
  estado,
  vista,
  vistaResendPass,
  estadoResendPass,
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { authorization } = useAuthContext();
  const [email, setEmail] = useState("");

  async function resetPassword(e, email) {
    e.preventDefault();
    await fetch("https://almartindev.online/api/user/reset-password", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    }).then((response) => {
      //console.log(response.status);
      if (response.status == 400) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: t("textAlertLoginError1"),
        });
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Email Enviado Correctamente",
        });
        navigate("/");
      } else if (response.status == 404 || response.status == 401) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: t("textAlertLoginError1"),
        });
      } else if (response.status == 403) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: t("textAlertLoginError1"),
        });
      }
    });
  }
  function handleInput(e) {
    setEmail(e.target.value);
  }

  useEffect(() => {
    if (authorization) {
      navigate("/");
    }
  }, [authorization]);

  function handleChange() {
    estado(!vista);
    estadoResendPass(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 7,
            border: "1px solid #3b8f1e",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#3b8f1e" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Email De Recuperacion
          </Typography>
          <Box
            component="form"
            onSubmit={(e) => resetPassword(e, email)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInput}
              value={email}
              color="success"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="success" />}
              label="Recuerdame"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#3b8f1e" }}
              color="success"
            >
              Recuperar Contraseña
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  onClick={() => handleChange()}
                  sx={{ cursor: "pointer" }}
                  variant="body2"
                >
                  Volver al Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
