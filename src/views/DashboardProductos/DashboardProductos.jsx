import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import "./DashboardProductos.css";

export default function DashboardProductos() {
  const [portada, setPortada] = useState(null);
  const [vistaPortada, setVistaPortada] = useState(false);
  const [plano, setPlano] = useState(null);
  const [vistaPlano, setVistaPlano] = useState(false);
  const [categoria, setCategoria] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  function handlePortada(e) {
    setPortada(e.target.files[0]);
    setVistaPortada(true);
  }

  function handlePlano(e) {
    setPlano(e.target.files[0]);
    setVistaPlano(true);
  }

  function handleFileInputChange(event) {
    setSelectedFile(event.target.files[0].name);
  }
  function handleChangeCategoria(e) {
    setCategoria(e.target.value);
  }

  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [responseText, setResponseText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("imagenPrincipal", file);
    formData.append("nombre", text);
    async function fetchUpload() {
      const response = await fetch(
        "https://almartindev.online/api/product/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        const responseText = await response.text();
        setResponseText(responseText);
      } else {
        setResponseText("Error al enviar el formulario");
      }
    }
    fetchUpload();
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Container maxWidth="md">
        <Box component="form" noValidate /*onSubmit={""}*/ sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                autoComplete="given-name"
                name="nombre"
                required
                fullWidth
                id="firstName"
                label="Nombre del Producto"
                autoFocus
                //   value={newUsuario.nombre}
                //   onChange={handleInput}
                color="success"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                required
                fullWidth
                id="ref"
                label="Referencia"
                name="ref"
                autoComplete="family-name"
                //   value={newUsuario.apellidos}
                //   onChange={handleInput}
                color="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth size="small">
                <InputLabel id="categoriaDashboard" color="success">
                  Categoria
                </InputLabel>
                <Select
                  input={<OutlinedInput label="Categoria" />}
                  labelId="demo-simple-select-label"
                  id="textCategoriaDashboard"
                  value={categoria}
                  label="demo-simple-select-label"
                  onChange={handleChangeCategoria}
                  color="success"
                >
                  <MenuItem value={"obra"}>Bungalows de obras</MenuItem>
                  <MenuItem value={"estructuras"}>
                    Estructuras metalicas
                  </MenuItem>
                  <MenuItem value={"edificios"}>
                    Edificios prefabricados
                  </MenuItem>
                  <MenuItem value={"naves"}>
                    Naves industruliales y hangares
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                autoComplete="descripcion"
                name="descripcion"
                required
                fullWidth
                id="descripcion"
                label="Descripcion del producto"
                autoFocus
                //   value={newUsuario.nombre}
                //   onChange={handleInput}
                color="success"
              />
            </Grid>
            {/* grid de medidas */}
            <Grid item xs={12} sm={6}>
              {/* grid de largo */}
              <Grid item xs={12} mb={2}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="largo"
                  label="Largo del bungalow"
                  name="largo"
                  autoComplete="largo"
                  //   value={newUsuario.direccion}
                  //   onChange={handleInput}
                  color="success"
                />
              </Grid>
              {/* grid de ancho */}
              <Grid item xs={12} mb={2}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="ancho"
                  label="Ancho"
                  name="ancho"
                  autoComplete="ancho"
                  //   value={newUsuario.telefono}
                  //   onChange={handleInput}
                  color="success"
                />
              </Grid>
              {/* grid de alto */}
              <Grid item xs={12} mb={2}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="alto"
                  label="Alto"
                  name="alto"
                  autoComplete="alto"
                  //   value={newUsuario.email}
                  //   onChange={handleInput}
                  color="success"
                />
              </Grid>
              {/* grid de peso */}
              <Grid item xs={12} mb={2}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  name="peso"
                  label="Peso"
                  id="peso"
                  autoComplete="peso"
                  //   value={newUsuario.password}
                  //   onChange={handleInput}
                  color="success"
                />
              </Grid>
            </Grid>
            {/* grid de fotos */}
            <Grid
              container
              item
              xs={12}
              md={6}
              alignContent="flex-start"
              gap={2}
            >
              <Grid
                container
                gap={{ sm: 2 }}
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={{ sm: "flex-start" }}
                justifyContent={{ sm: "flex-start" }}
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
                container
                gap={{ sm: 2 }}
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={{ sm: "flex-start" }}
                justifyContent={{ sm: "flex-start" }}
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
                  Planta
                  <input hidden multiple onChange={handlePlano} type="file" />
                </Button>
                {vistaPlano && plano ? (
                  <Typography variant="button">{plano.name}</Typography>
                ) : (
                  <Typography variant="button">
                    No hay foto seleccionada
                  </Typography>
                )}
              </Grid>
            </Grid>
            {/* grid de estructura */}
            <Grid item xs={12}>
              <TextField
                size="small"
                multiline
                rows={2}
                autoComplete="estructura"
                name="estructura"
                fullWidth
                id="estructura"
                label="Estructura"
                autoFocus
                //   value={newUsuario.nombre}
                //   onChange={handleInput}
                color="success"
              />
            </Grid>
            {/* grid de paneles */}
            <Grid item xs={12}>
              <TextField
                size="small"
                multiline
                rows={2}
                autoComplete="paneles"
                name="paneles"
                fullWidth
                id="paneles"
                label="Paneles"
                autoFocus
                //   value={newUsuario.nombre}
                //   onChange={handleInput}
                color="success"
              />
            </Grid>
            {/* grid de cubierta */}
            <Grid item xs={12}>
              <TextField
                size="small"
                multiline
                rows={2}
                autoComplete="cubierta"
                name="cubierta"
                fullWidth
                id="cubierta"
                label="Cubierta"
                autoFocus
                //   value={newUsuario.nombre}
                //   onChange={handleInput}
                color="success"
              />
            </Grid>
            {/* grid de suelo */}
            <Grid item xs={12}>
              <TextField
                size="small"
                multiline
                rows={2}
                autoComplete="suelo"
                name="suelo"
                fullWidth
                id="suelo"
                label="Suelo"
                autoFocus
                //   value={newUsuario.nombre}
                //   onChange={handleInput}
                color="success"
              />
            </Grid>
            {/* grid de puertas */}
            <Grid item xs={12}>
              <Typography variant="h5" fontWeight="bold" color="#07004e">
                Puertas
              </Typography>
              <Grid container item xs={12}>
                <Grid
                  container
                  item
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                  xs={4}
                >
                  <label for="puerta70">Puerta 70: </label>
                  <Grid xs={12} sm={4}>
                    <TextField
                      size="small"
                      type="number"
                      autoComplete="puerta70"
                      name="puerta70"
                      id="puerta70"
                      inputProps={{ min: 0, max: 10, defaultValue: 0 }}
                      autoFocus
                      //   value={newUsuario.nombre}
                      //   onChange={handleInput}
                      color="success"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                  xs={4}
                >
                  <label for="puerta 85">Puerta 85: </label>
                  <Grid xs={12} sm={4}>
                    <TextField
                      size="small"
                      type="number"
                      autoComplete="puerta 85"
                      name="puerta 85"
                      id="puerta 85"
                      inputProps={{ min: 0, max: 10, defaultValue: 0 }}
                      autoFocus
                      //   value={newUsuario.nombre}
                      //   onChange={handleInput}
                      color="success"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                  xs={4}
                >
                  <label for="puerta 140">Puerta 140: </label>
                  <Grid xs={12} sm={4}>
                    <TextField
                      size="small"
                      type="number"
                      autoComplete="puerta 140"
                      name="puerta 140"
                      id="puerta 140"
                      inputProps={{ min: 0, max: 10, defaultValue: 0 }}
                      autoFocus
                      //   value={newUsuario.nombre}
                      //   onChange={handleInput}
                      color="success"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* grid de ventanas */}
            <Grid item xs={12}>
              <Typography variant="h5" fontWeight="bold" color="#07004e">
                Ventanas
              </Typography>
              <Grid container item xs={12}>
                <Grid
                  container
                  item
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                  xs={4}
                >
                  <label for="ventana 100x100">Ventana 100x100: </label>
                  <Grid xs={12} sm={4}>
                    <TextField
                      size="small"
                      type="number"
                      autoComplete="ventana 100x100"
                      name="ventana 100x100"
                      id="ventana 100x100"
                      inputProps={{ min: 0, max: 10, defaultValue: 0 }}
                      autoFocus
                      //   value={newUsuario.nombre}
                      //   onChange={handleInput}
                      color="success"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                  xs={4}
                >
                  <label for="ventana 40x40">Ventana 40x40: </label>
                  <Grid xs={12} sm={4}>
                    <TextField
                      size="small"
                      type="number"
                      autoComplete="ventana 40x40"
                      name="ventana 40x40"
                      id="ventana 40x40"
                      inputProps={{ min: 0, max: 10, defaultValue: 0 }}
                      autoFocus
                      //   value={newUsuario.nombre}
                      //   onChange={handleInput}
                      color="success"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                  xs={4}
                >
                  <label for="ventana 100x80">Ventana 100x80: </label>
                  <Grid xs={12} sm={4}>
                    <TextField
                      size="small"
                      type="number"
                      autoComplete="ventana 100x80"
                      name="ventana 100x80"
                      id="ventana 100x80"
                      inputProps={{ min: 0, max: 10, defaultValue: 0 }}
                      autoFocus
                      //   value={newUsuario.nombre}
                      //   onChange={handleInput}
                      color="success"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: "#3b8f1e",
              ":hover": { bgcolor: "darkgreen", color: "white" },
            }}
          >
            Añadir Producto
          </Button>

          <input type="file" onChange={handleFileChange} />
          <input type="text" onChange={handleTextChange} />
          <button type="submit" onClick={handleSubmit}>
            Enviar
          </button>
          <p>{responseText}</p>
        </Box>
      </Container>
    </Container>
  );
}
