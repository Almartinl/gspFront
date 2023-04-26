import { Box, Button, Container, Grid, TextField } from "@mui/material";

export default function DashboardProyectos() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box component="form" noValidate /*onSubmit={""}*/ sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="nombre"
              required
              fullWidth
              id="nombre"
              label="Nombre del Proyecto"
              autoFocus
              //   value={newUsuario.nombre}
              //   onChange={handleInput}
              color="success"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Button
              variant="contained"
              component="label"
              sx={{
                bgcolor: "#3b8f1e",
                ":hover": { bgcolor: "darkgreen", color: "white" },
              }}
            >
              Subir Imagen Portada
              <input hidden multiple type="file" />
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Button
              variant="contained"
              component="label"
              sx={{
                bgcolor: "#3b8f1e",
                ":hover": { bgcolor: "darkgreen", color: "white" },
              }}
            >
              subir Imagenes del carousel
              <input hidden multiple type="file" />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
