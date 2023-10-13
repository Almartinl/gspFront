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

const theme = createTheme();

export default function FormEmailResendPass({
  estado,
  vista,
  vistaResendPass,
  estadoResendPass,
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login, authorization } = useAuthContext();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleInput(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
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
            //onSubmit={(e) => login(e, user)}
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
              value={user.email}
              color="success"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="success" />}
              label="Recuerdame"
            /> */}
            <Button
              //type="submit"
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
