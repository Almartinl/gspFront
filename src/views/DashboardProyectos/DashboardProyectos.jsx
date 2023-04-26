import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export default function DashboardProyectos() {
  const [portada, setPortada] = useState(null);
  const [vistaPortada, setVistaPortada] = useState(false);
  const [carouselUno, setCarouselUno] = useState(undefined);
  const [carouselDos, setCarouselDos] = useState(undefined);
  const [carouselTres, setCarouselTres] = useState(undefined);
  const [carouselCuatro, setCarouselCuatro] = useState(undefined);
  const [carouselCinco, setCarouselCinco] = useState(undefined);
  const [carouselSeis, setCarouselSeis] = useState(undefined);
  const [carouselSiete, setCarouselSiete] = useState(undefined);
  const [carouselOcho, setCarouselOcho] = useState(undefined);
  const [vistaCarouselUno, setVistaCarouselUno] = useState(false);
  const [vistaCarouselDos, setVistaCarouselDos] = useState(false);
  const [vistaCarouselTres, setVistaCarouselTres] = useState(false);
  const [vistaCarouselCuatro, setVistaCarouselCuatro] = useState(false);
  const [vistaCarouselCinco, setVistaCarouselCinco] = useState(false);
  const [vistaCarouselSeis, setVistaCarouselSeis] = useState(false);
  const [vistaCarouselSiete, setVistaCarouselSiete] = useState(false);
  const [vistaCarouselOcho, setVistaCarouselOcho] = useState(false);
  const [text, setText] = useState("");

  function handlePortada(e) {
    setPortada(e.target.files[0]);
    setVistaPortada(true);
  }

  function handleCarouselUno(e) {
    setCarouselUno(e.target.files[0]);
    setVistaCarouselUno(true);
  }

  function handleCarouselDos(e) {
    setCarouselDos(e.target.files[0]);
    setVistaCarouselDos(true);
  }

  function handleCarouselTres(e) {
    setCarouselTres(e.target.files[0]);
    setVistaCarouselTres(true);
  }

  function handleCarouselCuatro(e) {
    setCarouselCuatro(e.target.files[0]);
    setVistaCarouselCuatro(true);
  }

  function handleCarouselCinco(e) {
    setCarouselCinco(e.target.files[0]);
    setVistaCarouselCinco(true);
  }

  function handleCarouselSeis(e) {
    setCarouselSeis(e.target.files[0]);
    setVistaCarouselSeis(true);
  }

  function handleCarouselSiete(e) {
    setCarouselSiete(e.target.files[0]);
    setVistaCarouselSiete(true);
  }

  function handleCarouselOcho(e) {
    setCarouselOcho(e.target.files[0]);
    setVistaCarouselOcho(true);
  }

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("imagenPrincipal", portada);
    formData.append("nombre", text);
    if (carouselUno) {
      formData.append("imagen", carouselUno);
    }
    if (carouselDos) {
      formData.append("imagen", carouselDos);
    }
    if (carouselTres) {
      formData.append("imagen", carouselTres);
    }
    if (carouselCuatro) {
      formData.append("imagen", carouselCuatro);
    }
    if (carouselCinco) {
      formData.append("imagen", carouselCinco);
    }
    if (carouselSeis) {
      formData.append("imagen", carouselSeis);
    }
    if (carouselSiete) {
      formData.append("imagen", carouselSiete);
    }
    if (carouselOcho) {
      formData.append("imagen", carouselOcho);
    }
    async function fetchUpload() {
      const response = await fetch("https://almartindev.online/api/obras/add", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("proyecto subido");
        setPortada(null);
        setCarouselUno(null);
        setCarouselDos(null);
        setCarouselTres(null);
        setCarouselCuatro(null);
        setCarouselCinco(null);
        setCarouselSeis(null);
        setCarouselSiete(null);
        setCarouselOcho(null);
        setVistaPortada(false);
        setVistaCarouselUno(false);
        setVistaCarouselDos(false);
        setVistaCarouselTres(false);
        setVistaCarouselCuatro(false);
        setVistaCarouselCinco(false);
        setVistaCarouselSeis(false);
        setVistaCarouselSiete(false);
        setVistaCarouselOcho(false);
      } else {
        alert("Error al enviar el formulario");
      }
    }
    fetchUpload();
  }

  console.log(portada);
  console.log(vistaPortada);
  console.log(text);
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" color="#07004e">
          Formulario de Proyectos Realizados
        </Typography>
        <Box component="form" noValidate /*onSubmit={""}*/ sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <TextField
                autoComplete="given-name"
                name="nombre"
                required
                fullWidth
                id="nombre"
                label="Nombre del Proyecto"
                autoFocus
                size="small"
                onChange={handleTextChange}
                color="success"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ sm: "center" }}
              justifyContent={{ sm: "flex-start" }}
              gap={{ sm: 2 }}
            >
              <Button
                variant="contained"
                component="label"
                sx={{
                  gap: 0.5,
                  bgcolor: "#3b8f1e",
                  ":hover": { bgcolor: "darkgreen", color: "white" },
                }}
              >
                <AddAPhotoIcon />
                Portada
                <input hidden multiple onChange={handlePortada} type="file" />
              </Button>

              {vistaPortada && portada ? (
                <Typography variant="button">{portada.name}</Typography>
              ) : (
                <Typography variant="button">
                  No hay foto seleccionada
                </Typography>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              display="flex"
              flexDirection={{ xs: "column" }}
              justifyContent={{ sm: "center" }}
              gap={{ sm: 2 }}
            >
              <Grid
                item
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={{ sm: "center" }}
                justifyContent={{ sm: "flex-start" }}
                gap={{ sm: 2 }}
              >
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    gap: 0.5,
                    bgcolor: "#3b8f1e",
                    ":hover": { bgcolor: "darkgreen", color: "white" },
                  }}
                >
                  <AddAPhotoIcon />
                  Imagen 1
                  <input
                    hidden
                    multiple
                    onChange={handleCarouselUno}
                    type="file"
                  />
                </Button>
                {vistaCarouselUno && carouselUno ? (
                  <Typography variant="button">{carouselUno.name}</Typography>
                ) : (
                  <Typography variant="button">
                    No hay foto seleccionada
                  </Typography>
                )}
              </Grid>

              {vistaCarouselUno && (
                <>
                  <Grid
                    item
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    alignItems={{ sm: "center" }}
                    justifyContent={{ sm: "flex-start" }}
                    gap={{ sm: 2 }}
                  >
                    <Button
                      variant="contained"
                      component="label"
                      sx={{
                        gap: 0.5,
                        bgcolor: "#3b8f1e",
                        ":hover": { bgcolor: "darkgreen", color: "white" },
                      }}
                    >
                      <AddAPhotoIcon /> Imagen 2
                      <input
                        hidden
                        multiple
                        onChange={handleCarouselDos}
                        type="file"
                      />
                    </Button>
                    {vistaCarouselDos && carouselDos ? (
                      <Typography variant="button">
                        {carouselDos.name}
                      </Typography>
                    ) : (
                      <Typography variant="button">
                        No hay foto seleccionada
                      </Typography>
                    )}
                  </Grid>
                  {vistaCarouselDos && (
                    <>
                      <Grid
                        item
                        display="flex"
                        flexDirection={{ xs: "column", sm: "row" }}
                        alignItems={{ sm: "center" }}
                        justifyContent={{ sm: "flex-start" }}
                        gap={{ sm: 2 }}
                      >
                        <Button
                          variant="contained"
                          component="label"
                          sx={{
                            gap: 0.5,
                            bgcolor: "#3b8f1e",
                            ":hover": {
                              bgcolor: "darkgreen",
                              color: "white",
                            },
                          }}
                        >
                          <AddAPhotoIcon /> Imagen 3
                          <input
                            hidden
                            multiple
                            onChange={handleCarouselTres}
                            type="file"
                          />
                        </Button>
                        {vistaCarouselTres && carouselTres ? (
                          <Typography variant="button">
                            {carouselTres.name}
                          </Typography>
                        ) : (
                          <Typography variant="button">
                            No hay foto seleccionada
                          </Typography>
                        )}
                      </Grid>
                      {vistaCarouselTres && (
                        <>
                          <Grid
                            item
                            display="flex"
                            flexDirection={{ xs: "column", sm: "row" }}
                            alignItems={{ sm: "center" }}
                            justifyContent={{ sm: "flex-start" }}
                            gap={{ sm: 2 }}
                          >
                            <Button
                              variant="contained"
                              component="label"
                              sx={{
                                gap: 0.5,
                                bgcolor: "#3b8f1e",
                                ":hover": {
                                  bgcolor: "darkgreen",
                                  color: "white",
                                },
                              }}
                            >
                              <AddAPhotoIcon /> Imagen 4
                              <input
                                hidden
                                multiple
                                onChange={handleCarouselCuatro}
                                type="file"
                              />
                            </Button>
                            {vistaCarouselCuatro && carouselCuatro ? (
                              <Typography variant="button">
                                {carouselCuatro.name}
                              </Typography>
                            ) : (
                              <Typography variant="button">
                                No hay foto seleccionada
                              </Typography>
                            )}
                          </Grid>
                          {vistaCarouselCuatro && (
                            <>
                              <Grid
                                item
                                display="flex"
                                flexDirection={{ xs: "column", sm: "row" }}
                                alignItems={{ sm: "center" }}
                                justifyContent={{ sm: "flex-start" }}
                                gap={{ sm: 2 }}
                              >
                                <Button
                                  variant="contained"
                                  component="label"
                                  sx={{
                                    gap: 0.5,
                                    bgcolor: "#3b8f1e",
                                    ":hover": {
                                      bgcolor: "darkgreen",
                                      color: "white",
                                    },
                                  }}
                                >
                                  <AddAPhotoIcon /> Imagen 5
                                  <input
                                    hidden
                                    multiple
                                    onChange={handleCarouselCinco}
                                    type="file"
                                  />
                                </Button>
                                {vistaCarouselCinco && carouselCinco ? (
                                  <Typography variant="button">
                                    {carouselCinco.name}
                                  </Typography>
                                ) : (
                                  <Typography variant="button">
                                    No hay foto seleccionada
                                  </Typography>
                                )}
                              </Grid>
                              {vistaCarouselCinco && (
                                <>
                                  <Grid
                                    item
                                    display="flex"
                                    flexDirection={{ xs: "column", sm: "row" }}
                                    alignItems={{ sm: "center" }}
                                    justifyContent={{ sm: "flex-start" }}
                                    gap={{ sm: 2 }}
                                  >
                                    <Button
                                      variant="contained"
                                      component="label"
                                      sx={{
                                        gap: 0.5,
                                        bgcolor: "#3b8f1e",
                                        ":hover": {
                                          bgcolor: "darkgreen",
                                          color: "white",
                                        },
                                      }}
                                    >
                                      <AddAPhotoIcon /> Imagen 6
                                      <input
                                        hidden
                                        multiple
                                        onChange={handleCarouselSeis}
                                        type="file"
                                      />
                                    </Button>
                                    {vistaCarouselSeis && carouselSeis ? (
                                      <Typography variant="button">
                                        {carouselSeis.name}
                                      </Typography>
                                    ) : (
                                      <Typography variant="button">
                                        No hay foto seleccionada
                                      </Typography>
                                    )}
                                  </Grid>
                                  {vistaCarouselSeis && (
                                    <>
                                      <Grid
                                        item
                                        display="flex"
                                        flexDirection={{
                                          xs: "column",
                                          sm: "row",
                                        }}
                                        alignItems={{ sm: "center" }}
                                        justifyContent={{ sm: "flex-start" }}
                                        gap={{ sm: 2 }}
                                      >
                                        <Button
                                          variant="contained"
                                          component="label"
                                          sx={{
                                            gap: 0.5,
                                            bgcolor: "#3b8f1e",
                                            ":hover": {
                                              bgcolor: "darkgreen",
                                              color: "white",
                                            },
                                          }}
                                        >
                                          <AddAPhotoIcon /> Imagen 7
                                          <input
                                            hidden
                                            multiple
                                            onChange={handleCarouselSiete}
                                            type="file"
                                          />
                                        </Button>
                                        {vistaCarouselSiete && carouselSiete ? (
                                          <Typography variant="button">
                                            {carouselSiete.name}
                                          </Typography>
                                        ) : (
                                          <Typography variant="button">
                                            No hay foto seleccionada
                                          </Typography>
                                        )}
                                      </Grid>
                                      {vistaCarouselSiete && (
                                        <>
                                          <Grid
                                            item
                                            display="flex"
                                            flexDirection={{
                                              xs: "column",
                                              sm: "row",
                                            }}
                                            alignItems={{ sm: "center" }}
                                            justifyContent={{
                                              sm: "flex-start",
                                            }}
                                            gap={{ sm: 2 }}
                                          >
                                            <Button
                                              variant="contained"
                                              component="label"
                                              sx={{
                                                gap: 0.5,
                                                bgcolor: "#3b8f1e",
                                                ":hover": {
                                                  bgcolor: "darkgreen",
                                                  color: "white",
                                                },
                                              }}
                                            >
                                              <AddAPhotoIcon /> Imagen 8
                                              <input
                                                hidden
                                                multiple
                                                onChange={handleCarouselOcho}
                                                type="file"
                                              />
                                            </Button>
                                            {vistaCarouselOcho &&
                                            carouselOcho ? (
                                              <Typography variant="button">
                                                {carouselOcho.name}
                                              </Typography>
                                            ) : (
                                              <Typography variant="button">
                                                No hay foto seleccionada
                                              </Typography>
                                            )}
                                          </Grid>
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              {portada ? (
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    bgcolor: "#3b8f1e",
                    ":hover": { bgcolor: "darkgreen", color: "white" },
                  }}
                  onClick={handleSubmit}
                >
                  Subir proyecto
                </Button>
              ) : (
                <Button
                  variant="contained"
                  component="label"
                  disabled
                  sx={{
                    bgcolor: "#3b8f1e",
                    ":hover": { bgcolor: "darkgreen", color: "white" },
                  }}
                >
                  Subir proyecto
                </Button>
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
}
